<?php

/**
 * @covers ApiOpenSearch
 */
class ApiOpenSearchTest extends MediaWikiIntegrationTestCase {
	public function testGetAllowedParams() {
		$config = $this->replaceSearchEngineConfig();
		$config->method( 'getSearchTypes' )
			->willReturn( [ 'the one ring' ] );

		$api = $this->createApi();
		$engine = $this->replaceSearchEngine();
		$engine->method( 'getProfiles' )
			->will( $this->returnValueMap( [
				[ SearchEngine::COMPLETION_PROFILE_TYPE, $api->getUser(), [
					[
						'name' => 'normal',
						'desc-message' => 'normal-message',
						'default' => true,
					],
					[
						'name' => 'strict',
						'desc-message' => 'strict-message',
					],
				] ],
			] ) );

		$params = $api->getAllowedParams();

		$this->assertArrayNotHasKey( 'offset', $params );
		$this->assertArrayHasKey( 'profile', $params, print_r( $params, true ) );
		$this->assertEquals( 'normal', $params['profile'][ApiBase::PARAM_DFLT] );
	}

	private function replaceSearchEngineConfig() {
		$config = $this->getMockBuilder( SearchEngineConfig::class )
			->disableOriginalConstructor()
			->getMock();
		$this->setService( 'SearchEngineConfig', $config );

		return $config;
	}

	private function replaceSearchEngine() {
		$engine = $this->getMockBuilder( SearchEngine::class )
			->disableOriginalConstructor()
			->getMock();
		$engineFactory = $this->getMockBuilder( SearchEngineFactory::class )
			->disableOriginalConstructor()
			->getMock();
		$engineFactory->method( 'create' )
			->willReturn( $engine );
		$this->setService( 'SearchEngineFactory', $engineFactory );

		return $engine;
	}

	private function createApi() {
		$ctx = new RequestContext();
		$apiMain = new ApiMain( $ctx );
		return new ApiOpenSearch( $apiMain, 'opensearch', '' );
	}
}
