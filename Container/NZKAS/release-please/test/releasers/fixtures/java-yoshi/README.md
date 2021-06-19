Google Cloud Java Client for Stackdriver Trace
==============================================

Java idiomatic client for [Stackdriver Trace](https://cloud.google.com/trace/).

[![Maven](https://img.shields.io/maven-central/v/com.google.cloud/google-cloud-trace.svg)](https://img.shields.io/maven-central/v/com.google.cloud/google-cloud-trace.svg)

-   [Product Documentation](https://cloud.google.com/trace/docs/)
-   [Client Library Documentation](https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/trace/v1/package-summary.html)

> Note: This client is a work-in-progress, and may occasionally make backwards-incompatible changes.

Quickstart
----------

If you are using Maven, add this to your pom.xml file

    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-trace</artifactId>
      <version>0.108.0-beta</version>
    </dependency>

If you are using Gradle, add this to your dependencies

    compile 'com.google.cloud:google-cloud-trace:0.108.0-beta'

If you are using SBT, add this to your dependencies

    libraryDependencies += "com.google.cloud" % "google-cloud-trace" % "0.108.0-beta"

Authentication
--------------

See the [Authentication](https://github.com/googleapis/google-cloud-java#authentication) section in the base directory’s README.

About Stackdriver Trace
-----------------------

[Stackdriver Trace](https://cloud.google.com/trace/) is a distributed tracing system that collects latency data from your applications and displays it in the Google Cloud Platform Console. You can track how requests propagate through your application and receive detailed near real-time performance insights.

See the [Trace client library docs](https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/trace/v1/package-summary.html) to learn how to use this client library.

Getting Started
---------------

### Prerequisites

You will need a [Google Developers Console](https://console.developers.google.com/) project with the Stackdriver Trace API enabled. [Follow these instructions](https://cloud.google.com/resource-manager/docs/creating-managing-projects) to get your project set up. You will also need to set up the local development environment by [installing the Google Cloud SDK](https://cloud.google.com/sdk/) and running the following commands in command line: `gcloud auth login` and `gcloud config set project [YOUR PROJECT ID]`.

### Installation and setup

You’ll need to obtain the `google-cloud-trace` library. See the [Quickstart](#quickstart) section to add `google-cloud-trace` as a dependency in your code.

Troubleshooting
---------------

To get help, follow the instructions in the [shared Troubleshooting document](https://github.com/googleapis/google-cloud-common/blob/master/troubleshooting/readme.md#troubleshooting).

Transport
---------

Trace uses gRPC for the transport layer.

Java Versions
-------------

Java 7 or above is required for using this client.

Versioning
----------

This library follows [Semantic Versioning](http://semver.org/).

It is currently in major version zero (`0.y.z`), which means that anything may change at any time and the public API should not be considered stable.

Contributing
------------

Contributions to this library are always welcome and highly encouraged.

See `google-cloud`’s [CONTRIBUTING](https://github.com/googleapis/google-cloud-java/blob/master/CONTRIBUTING.md) documentation and the [shared documentation](https://github.com/googleapis/google-cloud-common/blob/master/contributing/readme.md#how-to-contribute-to-gcloud) for more information on how to get started.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. See [Code of Conduct](https://github.com/googleapis/google-cloud-java/blob/master/CODE_OF_CONDUCT.md#contributor-code-of-conduct) for more information.

License
-------

Apache 2.0 - See [LICENSE](https://github.com/googleapis/google-cloud-java/blob/master/LICENSE) for more information.

CI Status
---------

<table><thead><tr class="header"><th>Java Version</th><th>Status</th></tr></thead><tbody><tr class="odd"><td>Java 7</td><td><a href="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java7.html"><img src="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java7.svg" alt="Kokoro CI" /></a></td></tr><tr class="even"><td>Java 8</td><td><a href="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java8.html"><img src="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java8.svg" alt="Kokoro CI" /></a></td></tr><tr class="odd"><td>Java 11</td><td><a href="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java11.html"><img src="https://storage.googleapis.com/cloud-devrel-public/java/badges/java-trace/java11.svg" alt="Kokoro CI" /></a></td></tr></tbody></table>
