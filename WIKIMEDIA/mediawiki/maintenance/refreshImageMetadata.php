<?php
/**
 * Refresh image metadata fields. See also rebuildImages.php
 *
 * Usage: php refreshImageMetadata.php
 *
 * Copyright © 2011 Brian Wolff
 * https://www.mediawiki.org/
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * http://www.gnu.org/copyleft/gpl.html
 *
 * @file
 * @author Brian Wolff
 * @ingroup Maintenance
 */

require_once __DIR__ . '/Maintenance.php';

use MediaWiki\MediaWikiServices;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IMaintainableDatabase;

/**
 * Maintenance script to refresh image metadata fields.
 *
 * @ingroup Maintenance
 */
class RefreshImageMetadata extends Maintenance {

	/**
	 * @var IMaintainableDatabase
	 */
	protected $dbw;

	public function __construct() {
		parent::__construct();

		$this->addDescription( 'Script to update image metadata records' );
		$this->setBatchSize( 200 );

		$this->addOption(
			'force',
			'Reload metadata from file even if the metadata looks ok',
			false,
			false,
			'f'
		);
		$this->addOption(
			'broken-only',
			'Only fix really broken records, leave old but still compatible records alone.'
		);
		$this->addOption(
			'verbose',
			'Output extra information about each upgraded/non-upgraded file.',
			false,
			false,
			'v'
		);
		$this->addOption( 'start', 'Name of file to start with', false, true );
		$this->addOption( 'end', 'Name of file to end with', false, true );

		$this->addOption(
			'mediatype',
			'Only refresh files with this media type, e.g. BITMAP, UNKNOWN etc.',
			false,
			true
		);
		$this->addOption(
			'mime',
			"Only refresh files with this MIME type. Can accept wild-card 'image/*'. "
				. "Potentially inefficient unless 'mediatype' is also specified",
			false,
			true
		);
		$this->addOption(
			'metadata-contains',
			'(Inefficient!) Only refresh files where the img_metadata field '
				. 'contains this string. Can be used if its known a specific '
				. 'property was being extracted incorrectly.',
			false,
			true
		);
	}

	public function execute() {
		$force = $this->hasOption( 'force' );
		$brokenOnly = $this->hasOption( 'broken-only' );
		$verbose = $this->hasOption( 'verbose' );
		$start = $this->getOption( 'start', false );
		$this->setupParameters( $force, $brokenOnly );

		$upgraded = 0;
		$leftAlone = 0;
		$error = 0;

		$dbw = $this->getDB( DB_PRIMARY );
		$batchSize = $this->getBatchSize();
		if ( $batchSize <= 0 ) {
			$this->fatalError( "Batch size is too low...", 12 );
		}

		$repo = MediaWikiServices::getInstance()->getRepoGroup()->getLocalRepo();
		$conds = $this->getConditions( $dbw );

		// For the WHERE img_name > 'foo' condition that comes after doing a batch
		$conds2 = [];
		if ( $start !== false ) {
			$conds2[] = 'img_name >= ' . $dbw->addQuotes( $start );
		}

		$options = [
			'LIMIT' => $batchSize,
			'ORDER BY' => 'img_name ASC',
		];

		$fileQuery = LocalFile::getQueryInfo();
		$lbFactory = MediaWikiServices::getInstance()->getDBLoadBalancerFactory();

		do {
			$res = $dbw->select(
				$fileQuery['tables'],
				$fileQuery['fields'],
				array_merge( $conds, $conds2 ),
				__METHOD__,
				$options,
				$fileQuery['joins']
			);

			if ( $res->numRows() > 0 ) {
				$row1 = $res->current();
				$this->output( "Processing next {$res->numRows()} row(s) starting with {$row1->img_name}.\n" );
				$res->rewind();
			}

			foreach ( $res as $row ) {
				try {
					// LocalFile will upgrade immediately here if obsolete
					$file = $repo->newFileFromRow( $row );
					if ( $file->getUpgraded() ) {
						// File was upgraded.
						$upgraded++;
						$this->output( "Refreshed File:{$row->img_name}.\n" );
					} else {
						$leftAlone++;
						if ( $force ) {
							$file->upgradeRow();
							if ( $verbose ) {
								$this->output( "Forcibly refreshed File:{$row->img_name}.\n" );
							}
						} else {
							if ( $verbose ) {
								$this->output( "Skipping File:{$row->img_name}.\n" );
							}
						}
					}
				} catch ( Exception $e ) {
					$this->output( "{$row->img_name} failed. {$e->getMessage()}\n" );
				}
			}
			$conds2 = [ 'img_name > ' . $dbw->addQuotes( $row->img_name ) ];
			$lbFactory->waitForReplication();
		} while ( $res->numRows() === $batchSize );

		$total = $upgraded + $leftAlone;
		if ( $force ) {
			$this->output( "\nFinished refreshing file metadata for $total files. "
				. "$upgraded needed to be refreshed, $leftAlone did not need to "
				. "be but were refreshed anyways, and $error refreshes were suspicious.\n" );
		} else {
			$this->output( "\nFinished refreshing file metadata for $total files. "
				. "$upgraded were refreshed, $leftAlone were already up to date, "
				. "and $error refreshes were suspicious.\n" );
		}
	}

	/**
	 * @param IDatabase $dbw
	 * @return array
	 */
	private function getConditions( $dbw ) {
		$conds = [];

		$end = $this->getOption( 'end', false );
		$mime = $this->getOption( 'mime', false );
		$mediatype = $this->getOption( 'mediatype', false );
		$like = $this->getOption( 'metadata-contains', false );

		if ( $end !== false ) {
			$conds[] = 'img_name <= ' . $dbw->addQuotes( $end );
		}
		if ( $mime !== false ) {
			list( $major, $minor ) = File::splitMime( $mime );
			$conds['img_major_mime'] = $major;
			if ( $minor !== '*' ) {
				$conds['img_minor_mime'] = $minor;
			}
		}
		if ( $mediatype !== false ) {
			$conds['img_media_type'] = $mediatype;
		}
		if ( $like ) {
			$conds[] = 'img_metadata ' . $dbw->buildLike( $dbw->anyString(), $like, $dbw->anyString() );
		}

		return $conds;
	}

	/**
	 * @param bool $force
	 * @param bool $brokenOnly
	 */
	private function setupParameters( $force, $brokenOnly ) {
		global $wgUpdateCompatibleMetadata;

		if ( $brokenOnly ) {
			$wgUpdateCompatibleMetadata = false;
		} else {
			$wgUpdateCompatibleMetadata = true;
		}

		if ( $brokenOnly && $force ) {
			$this->fatalError( 'Cannot use --broken-only and --force together. ', 2 );
		}
	}
}

$maintClass = RefreshImageMetadata::class;
require_once RUN_MAINTENANCE_IF_MAIN;
