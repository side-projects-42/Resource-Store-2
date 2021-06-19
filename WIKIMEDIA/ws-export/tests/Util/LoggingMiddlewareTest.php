<?php

namespace App\Tests\Util;

use App\Util\LoggingMiddleware;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use Monolog\Handler\TestHandler;
use Monolog\Logger;
use PHPUnit\Framework\TestCase;

/**
 * @covers \Monolog\Logger
 */
class LoggingMiddlewareTest extends TestCase {

	public function setUp(): void {
		date_default_timezone_set( 'UTC' );
	}

	public function testRequestGetsForwardedAndLogged() {
		$testHandler = new TestHandler();
		$logger = new Logger( 'test', [ $testHandler ] );

		$response = $this->performTestRequest( $logger,
			new Request( 'GET', 'http://example.com' ),
			new Response( 200 ) );

		$this->assertEquals( 200, $response->getStatusCode() );
		$this->assertCount( 1, $testHandler->getRecords() );

		$record = $testHandler->getRecords()[0];

		$this->assertEquals( 'DEBUG', $record['level_name'] );
		$this->assertEquals( 'GET http://example.com', $record['message'] );
		$this->assertEquals( [], $record['context'] );
	}

	public function testNon2XXResponsesGetLoggedAsWarning() {
		$testHandler = new TestHandler();
		$logger = new Logger( 'test', [ $testHandler ] );

		$response = $this->performTestRequest( $logger,
			new Request( 'GET', 'http://example.com' ),
			new Response( 300 ) );

		$this->assertEquals( 300, $response->getStatusCode() );
		$this->assertCount( 2, $testHandler->getRecords() );
		$this->assertEquals( 'HTTP response 300', $testHandler->getRecords()[1]['message'] );
		$this->assertEquals( 'WARNING', $testHandler->getRecords()[1]['level_name'] );
	}

	private function performTestRequest( $logger, $request, $response ) {
		$stack = new HandlerStack( new MockHandler( [ $response ] ) );
		$stack->push( LoggingMiddleware::forLogger( $logger ) );
		$handler = $stack->resolve();
		return $handler( $request, [] )->wait();
	}
}
