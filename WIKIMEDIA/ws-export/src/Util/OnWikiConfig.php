<?php

namespace App\Util;

use DateInterval;
use DateTime;
use GuzzleHttp\Exception\ConnectException;
use Krinkle\Intuition\Intuition;
use Psr\Cache\CacheItemInterface;
use Symfony\Contracts\Cache\CacheInterface;

class OnWikiConfig {

	/** @var Api */
	private $api;

	/** @var CacheInterface */
	private $cache;

	/** @var Intuition */
	private $intuition;

	/** @var mixed[] The config data, retrieved from the wiki. */
	private $data;

	public function __construct( Api $api, CacheInterface $cache, Intuition $intuition ) {
		$this->api = $api;
		$this->cache = $cache;
		$this->intuition = $intuition;
	}

	/**
	 * Get the on-wiki configuration from the `MediaWiki:WS_Export.json` page. Cached for 1 month.
	 * @return mixed[] With keys: defaultFont
	 */
	private function getData( string $lang ): array {
		if ( isset( $this->data[ $lang ] ) ) {
			return $this->data[ $lang ];
		}
		$this->api->setLang( $lang );
		$cacheKey = Util::sanitizeCacheKey( 'OnWikiConfig_' . $lang );
		$this->data[ $lang ] = $this->cache->get( $cacheKey, function ( CacheItemInterface $cacheItem ) {
			$cacheItem->expiresAfter( new DateInterval( 'P1M' ) );
			$configPageName = 'MediaWiki:WS_Export.json';
			try {
				$dataUrl = 'https://' . $this->api->getDomainName() . '/w/index.php?title=' . $configPageName . '&action=raw&ctype=application/json';
				$json = $this->api->get( $dataUrl );
			} catch ( ConnectException $exception ) {
				// If an invalid wiki language, or connection fails for any reason.
				$json = '{}';
			}
			$data = json_decode( $json, true );
			if ( $data === null ) {
				$data = [];
			}
			if ( !$data ) {
				// Don't cache the empty result.
				$cacheItem->expiresAt( new DateTime() );
			}
			return $data;
		} );
		return $this->data[ $lang ];
	}

	/**
	 * Get the name of the default font to embed in exports.
	 *
	 * @param string $lang
	 * @return string
	 */
	public function getDefaultFont( string $lang ): string {
		$config = $this->getData( $lang );
		return $config['defaultFont'] ?? '';
	}
}
