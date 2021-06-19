<?php

namespace App;

use App\Repository\CreditRepository;
use App\Util\Api;
use App\Util\Util;
use DOMDocument;
use GuzzleHttp\Pool;
use GuzzleHttp\Psr7\Response;

/**
 * provide all the data needed to create a book file
 */
class BookProvider {
	protected $api = null;
	protected $options = [
		'images' => true, 'fonts' => false, 'categories' => true, 'credits' => true
	];
	private $creditRepo;

	/**
	 * @param $api Api
	 * @param bool[] $options
	 */
	public function __construct( Api $api, array $options, CreditRepository $creditRepo ) {
		$this->api = $api;
		$this->options = array_merge( $this->options, $options );
		$this->creditRepo = $creditRepo;
	}

	/**
	 * return all the data on a book needed to export it
	 * @param $title string the title of the main page of the book in Wikisource
	 * @param $isMetadata bool only retrieve metadata on the book
	 * @return Book
	 */
	public function get( $title, $isMetadata = false ) {
		$title = str_replace( ' ', '_', trim( $title ) );
		$doc = $this->getDocument( $title );

		return $this->getMetadata( $title, $isMetadata, $doc );
	}

	public function getMulti( array $titles, $isMetadata = false ) {
		$pages = [];
		foreach ( $titles as $title ) {
			$page = new Page();
			$page->title = str_replace( ' ', '_', trim( $title ) );
			$pages[] = $page;
		}

		$pages = $this->getPages( $pages );

		foreach ( $pages as $id => $page ) {
			$pages[$id] = $this->getMetadata( $page->title, $isMetadata, $page->content );
		}

		return $pages;
	}

	/**
	 * Get metadata etc. from a XHTML document.
	 * @param string $title The book's titlepage's page name.
	 * @param bool $isMetadata Whether this the book's content, chapters, credits, and pictures should also be extracted from the document.
	 * @param DOMDocument $doc The document to read metadata from.
	 * @return Book
	 */
	public function getMetadata( string $title, bool $isMetadata, DOMDocument $doc ): Book {
		$pageList = [ $title ];
		$parser = new PageParser( $doc );
		$book = new Book();
		$book->options = $this->options;
		$book->title = $title;
		$book->lang = $this->api->getLang();

		$metadataSrc = $parser->getMetadata( 'ws-metadata' );
		if ( $metadataSrc == '' ) {
			$metadataSrc = $title;
			$metadataParser = $parser;
		} else {
			$doc = $this->getDocument( $metadataSrc );
			$metadataParser = new PageParser( $doc );
		}

		$book->type = $metadataParser->getMetadata( 'ws-type' );
		$book->name = $metadataParser->getMetadata( 'ws-title' );
		if ( $book->name == '' ) {
			$book->name = $this->removeNamespacesFromTitle( str_replace( '_', ' ', $metadataSrc ) );
		}
		$book->periodical = $metadataParser->getMetadata( 'ws-periodical' );
		$book->author = $metadataParser->getMetadata( 'ws-author' );
		$book->translator = $metadataParser->getMetadata( 'ws-translator' );
		$book->illustrator = $metadataParser->getMetadata( 'ws-illustrator' );
		$book->school = $metadataParser->getMetadata( 'ws-school' );
		$book->publisher = $metadataParser->getMetadata( 'ws-publisher' );
		$book->year = $metadataParser->getMetadata( 'ws-year' );
		$book->place = $metadataParser->getMetadata( 'ws-place' );
		$book->key = $metadataParser->getMetadata( 'ws-key' );
		$book->progress = $metadataParser->getMetadata( 'ws-progress' );
		$book->volume = $metadataParser->getMetadata( 'ws-volume' );
		$book->scan = str_replace( ' ', '_', $metadataParser->getMetadata( 'ws-scan' ) );
		$pictures = [];
		if ( $this->options['images'] || $isMetadata ) {
			$book->cover = $metadataParser->getMetadata( 'ws-cover' );
			if ( $book->cover != '' ) {
				$pictures[$book->cover] = $this->getCover( $book->cover, $book->lang );
				if ( $pictures[$book->cover]->url == '' ) {
					$book->cover = '';
				}
			}
		}
		if ( $this->options['categories'] ) {
			$book->categories = $this->getCategories( $metadataSrc );
		}
		$pageTitles = $parser->getPagesList();
		$namespaces = array_keys( $this->api->getNamespaces() );

		if ( !$isMetadata ) {
			if ( !$parser->metadataIsSet( 'ws-noinclude' ) ) {
				$book->content = $parser->getContent( true );
				if ( $this->options['images'] ) {
					$pictures = array_merge( $pictures, $parser->getPicturesList() );
				}
			}
			$chapterTitles = $parser->getFullChaptersList( $title, $pageList, $namespaces );
			$chapters = $this->getPages( $chapterTitles );

			// Generate all the chapters
			foreach ( $chapters as $chapter_key => $chapter ) {
				$parser = new PageParser( $chapter->content );
				if ( $parser->metadataIsSet( 'ws-noinclude' ) ) {
					unset( $chapters[$chapter_key] );
					continue;
				}
				$pageTitles = array_merge( $pageTitles, $parser->getPagesList() );
				$chapter->content = $parser->getContent( false );
				if ( $this->options['images'] ) {
					$pictures = array_merge( $pictures, $parser->getPicturesList() );
				}
				$subpagesTitles = $parser->getChaptersList( $pageList, $namespaces );
				if ( !empty( $subpagesTitles ) ) {
					$subpages = $this->getPages( $subpagesTitles );
					foreach ( $subpages as $subpage_key => $subpage ) {
						$parser = new PageParser( $subpage->content );
						if ( $parser->metadataIsSet( 'ws-noinclude' ) ) {
							unset( $chapters[$subpage_key] );
							continue;
						}
						$pageTitles = array_merge( $pageTitles, $parser->getPagesList() );
						$subpage->content = $parser->getContent( false );
						if ( $this->options['images'] ) {
							$pictures = array_merge( $pictures, $parser->getPicturesList() );
						}
					}
					$chapterTitles = array_merge( $chapterTitles, $subpagesTitles );
					$chapter->chapters = $subpages;
				}
			}
			$book->chapters = $chapters;

			if ( $this->options['credits'] ) {
				$book->credits = $this->getBookCredits( $book, $chapterTitles, $pageTitles, $pictures );
			}

			$pictures = $this->getPicturesData( $pictures );
		}
		$book->pictures = $pictures;

		return $book;
	}

	/**
	 * return the content of the page
	 * @param string $title the title of the page in Wikisource
	 * @return DOMDocument
	 */
	protected function getDocument( $title ) {
		return $this->domDocumentFromHtml( $this->api->getPageAsync( $title )->wait() );
	}

	protected function domDocumentFromHtml( $html ) {
		return Util::buildDOMDocumentFromHtml( $html );
	}

	/**
	 * return the content of the page
	 * @param Page[] $pages
	 * @return Page[]
	 */
	protected function getPages( $pages ) {
		$promises = [];

		foreach ( $pages as $id => $page ) {
			$promises[$id] = $this->api->getPageAsync( $page->title );
		}

		foreach ( $pages as $id => $page ) {
			$page->content = $this->domDocumentFromHtml( $promises[$id]->wait() );
		}

		return $pages;
	}

	/**
	 * Download image files to the temp directory, and add `tempFile` and `mimetype` attributes to each Picture object.
	 * @param Picture[] $pictures All Pictures in the book, keyed by the thumbnail filename.
	 * @return Picture[]
	 */
	protected function getPicturesData( array $pictures ) {
		$cache = FileCache::singleton();
		$client = $this->api->getClient();
		$requests = function () use ( $client, $pictures, $cache ) {
			foreach ( $pictures as $picture ) {
				$url = $picture->url;
				yield function () use ( $client, $url ) {
					// We could use the 'sink' option here, but for https://github.com/Kevinrob/guzzle-cache-middleware/issues/82
					return $client->getAsync( $url );
				};
			}
		};
		$pool = new Pool( $client, $requests(), [
			'fulfilled' => function ( Response $response, $index ) use ( $cache, $pictures ) {
				$pictureIndex = array_keys( $pictures )[ $index ];

				// Write the temp file and store its path.
				$tempFile = $cache->getDirectory() . '/' . uniqid( 'pic-' );
				file_put_contents( $tempFile, $response->getBody()->getContents() );
				$pictures[$pictureIndex]->tempFile = $tempFile;

				// Get the media type, and strip everything apart from the main type and subtype, to extract a mime
				// type that conforms to https://www.w3.org/publishing/epub32/epub-spec.html#sec-cmt-supported
				$contentType = $response->getHeader( 'Content-Type' )[0];
				if ( strpos( $contentType, ';' ) !== false ) {
					$contentType = substr( $contentType, 0, strpos( $contentType, ';' ) );
				}
				// Store the returned mime type of the downloaded file in the Picture object.
				$pictures[$pictureIndex]->mimetype = $contentType;
			},
		] );
		$pool->promise()->wait();
		return $pictures;
	}

	/**
	 * return the categories in the pages
	 * @param string $title the title of the page in Wikisource
	 * @return string[] The categories
	 */
	public function getCategories( $title ) {
		$categories = [];
		$response = $this->api->queryAsync( [ 'titles' => $title, 'prop' => 'categories', 'clshow' => '!hidden' ] )->wait();
		foreach ( $response['query']['pages'] as $list ) {
			if ( isset( $list['categories'] ) ) {
				foreach ( $list['categories'] as $categorie ) {
					$cat = explode( ':', $categorie['title'], 2 );
					$categories[] = $cat[1];
				}
			}
		}

		return $categories;
	}

	/**
	 * return the cover of the book
	 * @param $cover string the name of the cover
	 * @return Picture The cover
	 */
	public function getCover( $cover, $lang ) {
		$id = explode( '/', $cover );
		$title = $id[0];
		$picture = new Picture();
		$picture->title = $cover;
		$response = $this->api->queryAsync( [ 'titles' => 'File:' . $title, 'prop' => 'imageinfo', 'iiprop' => 'mime|url|canonicaltitle' ] )->wait();
		$page = end( $response['query']['pages'] );
		$picture->url = $page['imageinfo'][0]['url'];
		$picture->mimetype = $page['imageinfo'][0]['mime'];
		if ( in_array( $picture->mimetype, [ 'image/vnd.djvu', 'application/pdf' ] ) ) {
			if ( !array_key_exists( 1, $id ) ) {
				$id[1] = 1;
			}
			$temps = explode( '/', $picture->url );
			foreach ( $temps as $temp ) {
				$title = $temp;
			}
			if ( strstr( $picture->url, '/commons/' ) ) {
				$picture->url = str_replace( 'commons/', 'commons/thumb/', $picture->url ) . '/page' . $id[1] . '-400px-' . $title . '.jpg';
			} elseif ( strstr( $picture->url, '/wikisource/' . $lang ) ) {
				$picture->url = str_replace( 'wikisource/' . $lang, 'wikisource/' . $lang . '/thumb/', $picture->url ) . '/page' . $id[1] . '-400px-' . $title . '.jpg';
			} elseif ( strstr( $picture->url, '/sources/' ) ) {
				$picture->url = str_replace( 'sources/', 'sources/thumb/', $picture->url ) . '/page' . $id[1] . '-400px-' . $title . '.jpg';
			} else {
				return new Picture();
			}
			$picture->mimetype = 'image/jpeg';
			$picture->title .= '.jpg';
			$picture->name = $page['imageinfo'][0]['canonicaltitle'];
		}

		return $picture;
	}

	/**
	 * @param Book $book
	 * @param Page[] $chapters
	 * @param string[] $otherPages
	 * @param Picture[] $pictures
	 * @return array
	 */
	protected function getBookCredits( Book $book, array $chapters, array $otherPages, array $pictures ) {
		$namespaces = $this->api->getNamespaces();

		$pages = [ $book->title ];
		foreach ( $chapters as $id => $chapter ) {
			$pages[] = $chapter->title;
		}
		if ( $book->scan != '' ) {
			$pages[] = 'Index:' . $book->scan;
		}

		$pages = array_unique( array_merge( $pages, $otherPages ) );
		$pageCredits = $this->creditRepo->getPageCredits( $book->lang, $namespaces, $pages );

		$imagesSet = [];
		foreach ( $pictures as $id => $picture ) {
			if ( $picture->name ) {
				$imagesSet[$picture->name] = true;
			}
		}
		$imageCredits = [];
		if ( !empty( $imagesSet ) ) {
			$images = array_keys( $imagesSet );
			$imageCredits = $this->creditRepo->getImageCredits( $images );
		}

		$allCredits = array_merge( $pageCredits, $imageCredits );
		$credits = [];

		foreach ( $allCredits as $values ) {
			$name = $values[ 'actor_name' ];
			if ( !in_array( $name, $credits ) ) {
				$credits[$name] = [ 'count' => 0, 'bot' => [] ];
			}
			if ( isset( $values['count'] ) ) {
				$credits[$name]['count'] += $values['count'];
			} else {
				$credits[$name]['count'] += 1;
			}
			$credits[$name]['bot'] = $values['bot'];
		}

		uasort( $credits, function ( $a, $b ) {
			return $b['count'] - $a['count'];
		} );

		return $credits;
	}

	private function removeNamespacesFromTitle( $title ) {
		$namespaces = array_keys( $this->api->getNamespaces() );
		foreach ( $namespaces as $namespace ) {
			if ( strpos( $title, $namespace . ':' ) === 0 ) {
				return substr( $title, strlen( $namespace ) + 1 );
			}
		}
		return $title;
	}
}
