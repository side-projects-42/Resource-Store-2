<?php

use App\Kernel;
use Symfony\Component\Dotenv\Dotenv;
use Symfony\Component\ErrorHandler\Debug;
use Symfony\Component\HttpFoundation\Request;

require dirname( __DIR__ ) . '/vendor/autoload.php';

( new Dotenv() )->bootEnv( dirname( __DIR__ ) . '/.env' );

if ( $_SERVER[ 'APP_DEBUG' ] ) {
	umask( 0000 );

	Debug::enable();
}

$trustedProxies = $_SERVER[ 'TRUSTED_PROXIES' ] ?? false;
if ( $trustedProxies ) {
	Request::setTrustedProxies(
		explode( ',', $trustedProxies ),
		Request::HEADER_X_FORWARDED_ALL ^ Request::HEADER_X_FORWARDED_HOST
	);
}

$trustedHosts = $_SERVER[ 'TRUSTED_HOSTS' ] ?? false;
if ( $trustedHosts ) {
	Request::setTrustedHosts( [ $trustedHosts ] );
}

require dirname( __DIR__ ) . '/config/bootstrap.php';

$kernel = new Kernel( $_SERVER[ 'APP_ENV' ], (bool)$_SERVER[ 'APP_DEBUG' ] );
$request = Request::createFromGlobals();
$response = $kernel->handle( $request );
$response->send();
$kernel->terminate( $request, $response );
