Dependency Injection
====================

This is an overview of how MediaWiki makes use of dependency injection. The design described here grew from the discussion of RFC [T384](https://phabricator.wikimedia.org/T384).

The term “dependency injection” (DI) refers to a pattern on object oriented programming that tries to improve modularity by reducing strong coupling between classes. In practical terms, this means that anything an object needs to operate should be injected from the outside, the object itself should only know narrow interfaces, no concrete implementation of the logic it relies on.

The requirement to inject everything typically results in an architecture that based on two main types of objects: simple value objects with no business logic (and often immutable), and essentially stateless service objects that use other service objects to operate on the value objects.

As of the beginning of 2016 (MW version 1.27), MediaWiki is only starting to use the DI approach. Much of the code still relies on global state or direct instantiation, resulting in a highly cyclical dependency graph.

Overview
--------

The heart of the DI in MediaWiki is the central service locator, MediaWikiServices, which acts as the top level factory for services in MediaWiki. `MediaWikiServices::getInstance()` returns the default service locator instance, which can be used to gain access to default instances of various services. MediaWikiServices however also allows new services to be defined and default services to be redefined. Services are defined or redefined by providing a callback function, the “instantiator” function, that will return a new instance of the service.

When `MediaWikiServices::getInstance()` is first called, it will create an instance of MediaWikiServices and populate it with the services defined in the files listed by `$wgServiceWiringFiles`, thereby “bootstrapping” the DI framework. Per default, `$wgServiceWiringFiles` lists includes/ServiceWiring.php, which defines all default service implementations, and specifies how they depend on each other (“wiring”).

When a new service is added to MediaWiki core, an instantiator function that will create the appropriate default instance for that service must be added to ServiceWiring.php. This makes the service available through the generic getService() method on the service locator returned by `MediaWikiServices::getInstance()`.

Extensions can add their own wiring files to `$wgServiceWiringFiles`, in order to define their own service. Extensions may also use the ‘MediaWikiServices’ hook to define or redefined services by calling methods on the default MediaWikiServices instance.

It should be noted that the term “service locator” is often used to refer to a top level factory that is accessed directly, throughout the code, to avoid explicit dependency injection. In contrast, the term “DI container” is often used to describe a top level factory that is only accessed when services are created. We use the term “service locator” for the top level factory because it is more descriptive than “DI container”, even though application logic is strongly discouraged from accessing MediaWikiServices directly. `MediaWikiServices::getInstance()` should ideally be accessed only in “static entry points” such as hook handler functions. See “Migration” below.

Service Reset
-------------

Services get their configuration injected, and changes to global configuration variables will not have any effect on services that were already instantiated. This would typically be the case for low level services like the ConfigFactory or the ObjectCacheManager, which are used during extension registration. To address this issue, Setup.php resets the global service locator instance by calling `MediaWikiServices::resetGlobalInstance()` once configuration and extension registration is complete.

Note that “unmanaged” legacy services services that manage their own singleton must not keep references to services managed by MediaWikiServices, to allow a clean reset. After the global MediaWikiServices instance got reset, any such references would be stale, and using a stale service will result in an error.

Services should either have all dependencies injected and be themselves managed by MediaWikiServices, or they should use the Service Locator pattern, accessing service instances via the global MediaWikiServices instance state when needed. This ensures that no stale service references remain after a reset.

Configuration
-------------

When the default MediaWikiServices instance is created, a Config object is provided to the constructor. This Config object represents the “bootstrap” configuration which will become available as the ‘BootstrapConfig’ service. As of MW 1.27, the bootstrap config is a GlobalVarConfig object providing access to the $wgXxx configuration variables.

The bootstrap config is then used to construct a ‘ConfigFactory’ service, which in turn is used to construct the ‘MainConfig’ service. Application logic should use the ‘MainConfig’ service (or a more specific configuration object). ‘BootstrapConfig’ should only be used for bootstrapping basic services that are needed to load the ‘MainConfig’.

Note: Several well known services in MediaWiki core act as factories themselves, e.g. ApiModuleManager, ObjectCache, SpecialPageFactory, etc. The registries these factories are based on are currently managed as part of the configuration. This may however change in the future.

Migration
---------

This section provides some recipes for improving code modularity by reducing strong coupling. The dependency injection mechanism described above is an essential tool in this effort.

### Migrate access to global service instances and config variables

Assume `Foo` is a class that uses the `$wgScriptPath` global and calls `wfGetDB()` to get a database connection, in non-static methods.

-   Add `$scriptPath` as a constructor parameter and use `$this->scriptPath` instead of `$wgScriptPath`.
-   Add LoadBalancer `$dbLoadBalancer` as a constructor parameter. Use `$this->dbLoadBalancer->getConnection()` instead of `wfGetDB()`.
-   Any code that calls `Foo`’s constructor would now need to provide the `$scriptPath` and `$dbLoadBalancer`. To avoid this, avoid direct instantiation of services all together - see below.

### Migrate services with multiple configuration variables

When a service needs multiple configuration globals injected, a ServiceOptions object is commonly used with the service class defining a public constant (usually `CONSTRUCTOR_OPTIONS`) with an array of settings that the class needs access to.

    <?php

    class DemoService {

        public const CONSTRUCTOR_OPTIONS = [
            'Foo',
            'Bar'
        ];

        private $options;

        public function __construct( ServiceOptions $options ) {
            // ServiceOptions::assertRequiredOptions ensures that all of the
            // settings listed in CONSTRUCTOR_OPTIONS are available
            $options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );
            $this->options = $options;
            // $wgFoo is now available with $this->options->get( 'Foo' )
            // $wgBar is now available with $this->options->get( 'Bar' )
        }

    }

ServiceOptions objects are constructed within ServiceWiring.php and can also be created in tests.

    'DemoService' => function ( MediaWikiServices $services ) : DemoService {
        return new DemoService(
            new ServiceOptions(
                DemoService::CONSTRUCTOR_OPTIONS,
                $services->getMainConfig()
            )
        );
    },

### Migrate class-level singleton getters

Assume class `Foo` has mostly non-static methods, and provides a static `getInstance()` method that returns a singleton (or default instance).

-   Add an instantiator function for `Foo` into ServiceWiring.php. The instantiator would do exactly what `Foo::getInstance()` did. However, it should replace any access to global state with calls to `$services->getXxx()` to get a service, or `$services->getMainConfig()->get()` to get a configuration setting.
-   Add a `getFoo()` method to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   Turn `Foo::getInstance()` into a deprecated alias for `MediaWikiServices::getInstance()->getFoo()`. Change all calls to `Foo::getInstance()` to use injection (see above).

### Migrate direct service instantiation

Assume class `Bar` calls `new Foo()`.

-   Add an instantiator function for `Foo` into ServiceWiring.php and add a `getFoo()` method to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   In the instantiator, replace any access to global state with calls to `$services->getXxx()` to get a service, or `$services->getMainConfig()->get()` to get a configuration setting.
-   The code in `Bar` that calls `Foo`’s constructor should be changed to have a `Foo` instance injected; Eventually, the only code that instantiates `Foo` is the instantiator in ServiceWiring.php.
-   As an intermediate step, `Bar`’s constructor could initialize the `$foo` member variable by calling `MediaWikiServices::getInstance()->getFoo()`. This is acceptable as a stepping stone, but should be replaced by proper injection via a constructor argument. Do not however inject the MediaWikiServices object!

### Migrate parameterized helper instantiation

Assume class `Bar` creates some helper object by calling `new Foo( $x )`, and `Foo` uses a global singleton of the `Xyzzy` service.

-   Define a `FooFactory` class (or a `FooFactory` interface along with a `MyFooFactory` implementation). `FooFactory` defines the method `newFoo( $x )` or `getFoo( $x )`, depending on the desired semantics (`newFoo` would guarantee a fresh instance). When Foo gets refactored to have `Xyzzy` injected, `FooFactory` will need a `Xyzzy` instance, so `newFoo()` can pass it to `new Foo()`.
-   Add an instantiator function for FooFactory into ServiceWiring.php and add a getFooFactory() method to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   The code in Bar that calls Foo’s constructor should be changed to have a FooFactory instance injected; Eventually, the only code that instantiates Foo are implementations of FooFactory, and the only code that instantiates FooFactory is the instantiator in ServiceWiring.php.
-   As an intermediate step, Bar’s constructor could initialize the $fooFactory member variable by calling `MediaWikiServices::getInstance()->getFooFactory()`. This is acceptable as a stepping stone, but should be replaced by proper injection via a constructor argument. Do not however inject the MediaWikiServices object!

### Migrate a handler registry

Assume class `Bar` calls `FooRegistry::getFoo( $x )` to get a specialized `Foo` instance for handling `$x`.

-   Turn `getFoo` into a non-static method.
-   Add an instantiator function for `FooRegistry` into ServiceWiring.php and add a `getFooRegistry()` method to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   Change all code that calls `FooRegistry::getFoo()` statically to call this method on a `FooRegistry` instance. That is, `Bar` would have a `$fooRegistry` member, initialized from a constructor parameter.
-   As an intermediate step, Bar’s constructor could initialize the `$fooRegistry` member variable by calling `MediaWikiServices::getInstance()->getFooRegistry()`. This is acceptable as a stepping stone, but should be replaced by proper injection via a constructor argument. Do not however inject the MediaWikiServices object!

### Migrate deferred service instantiation

Assume class `Bar` calls `new Foo()`, but only when needed, to avoid the cost of instantiating Foo().

-   Define a `FooFactory` interface and a `MyFooFactory` implementation of that interface. `FooFactory` defines the method `getFoo()` with no parameters.
-   Precede as for the “parameterized helper instantiation” case described above.

### Migrate a class with only static methods

Assume `Foo` is a class with only static methods, such as `frob()`, which interacts with global state or system resources.

-   Introduce a `FooService` interface and a `DefaultFoo` implementation of that interface. `FooService` contains the public methods defined by Foo.
-   Add an instantiator function for `FooService` into ServiceWiring.php and add a `getFooService()` method to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   Add a private static `getFooService()` method to `Foo`. That method just calls `MediaWikiServices::getInstance()->getFooService()`.
-   Make all methods in `Foo` delegate to the `FooService` returned by `getFooService()`. That is, `Foo::frob()` would do `self::getFooService()->frob()`.
-   Deprecate `Foo`. Inject a `FooService` into all code that calls methods on `Foo`, and change any calls to static methods in foo to the methods provided by the `FooService` interface.

### Migrate static hook handler functions (to allow unit testing)

Assume `MyExtHooks::onFoo` is a static hook handler function that is called with the parameter `$x`; Further assume `MyExt::onFoo` needs service `Bar`, which is already known to MediaWikiServices (if not, see above).

-   Create a non-static `doFoo( $x )` method in `MyExtHooks` that has the same signature as `onFoo( $x )`. Move the code from `onFoo()` into `doFoo()`, replacing any access to global or static variables with access to instance member variables.
-   Add a constructor to `MyExtHooks` that takes a Bar service as a parameter.
-   Add a static method called `newFromGlobalState()` with no parameters. It should just return `new MyExtHooks( MediaWikiServices::getInstance()->getBar() )`.
-   The original static handler method `onFoo( $x )` is then implemented as `self::newFromGlobalState()->doFoo( $x )`.

### Migrate a “smart record”

Assume `Thingy` is a “smart record” that “knows” how to load and store itself. For this purpose, `Thingy` uses wfGetDB().

-   Create a “dumb” value class `ThingyRecord` that contains all the information that `Thingy` represents (e.g. the information from a database row). The value object should not know about any service.
-   Create a DAO-style service for loading and storing `ThingyRecord`s, called `ThingyStore`. It may be useful to split the interfaces for reading and writing, with a single class implementing both interfaces, so we in the end have the `ThingyLookup` and `ThingyStore` interfaces, and a SqlThingyStore implementation.
-   Add instantiator functions for `ThingyLookup` and `ThingyStore` in ServiceWiring.php. Since we want to use the same instance for both service interfaces, the instantiator for `ThingyLookup` would return `$services->getThingyStore()`.
-   Add `getThingyLookup()` and `getThingyStore()` methods to MediaWikiServices. Don’t forget to add the appropriate test cases in MediaWikiServicesTest.
-   In the old `Thingy` class, replace all member variables that represent the record’s data with a single `ThingyRecord` object.
-   In the old Thingy class, replace all calls to static methods or functions, such as wfGetDB(), with calls to the appropriate services, such as `LoadBalancer::getConnection()`.
-   In Thingy’s constructor, pull in any services needed, such as the LoadBalancer, by using `MediaWikiServices::getInstance()`. These services cannot be injected without changing the constructor signature, which is often impractical for “smart records” that get instantiated directly in many places in the code base.
-   Deprecate the old `Thingy` class. Replace all usages of it with one of the three new classes: loading needs a `ThingyLookup`, storing needs a `ThingyStore`, and reading data needs a `ThingyRecord`.

### Migrate lazy loading

Assume `Thingy` is a “smart record” as described above, but requires lazy loading of some or all the data it represents.

-   Instead of a plain object, define `ThingyRecord` to be an interface. Provide a “simple” and “lazy” implementations, called `SimpleThingyRecord` and `LazyThingyRecord`. `LazyThingyRecord` knows about some lower level storage interface, like a LoadBalancer, and uses it to load information on demand.
-   Any direct instantiation of a `ThingyRecord` would use the `SimpleThingyRecord` implementation.
-   `SqlThingyStore` however creates instances of `LazyThingyRecord`, and injects whatever storage layer service `LazyThingyRecord` needs to perform lazy loading.
