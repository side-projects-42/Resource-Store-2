Google Cloud Bill of Materials
==============================

The `google-cloud-bom` module is basically a pom that can be used to import consistent versions of google-cloud-java components plus its dependencies.

To use it in Maven, add the following to your POM:

      <dependencyManagement>
        <dependencies>
          <dependency>
            <groupId>com.google.cloud</groupId>
            <artifactId>google-cloud-bom</artifactId>
            <version>0.123.1-alpha</version>
            <type>pom</type>
            <scope>import</scope>
          </dependency>
        </dependencies>
      </dependencyManagement>

Contributing
------------

Contributions to this library are always welcome and highly encouraged.

See `google-cloud`’s [CONTRIBUTING](https://github.com/googleapis/google-cloud-java/blob/master/CONTRIBUTING.md) documentation and the [shared documentation](https://github.com/googleapis/google-cloud-common/blob/master/contributing/readme.md#how-to-contribute-to-gcloud) for more information on how to get started.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. See [Code of Conduct](https://github.com/googleapis/google-cloud-java/blob/master/CODE_OF_CONDUCT.md#contributor-code-of-conduct) for more information.

License
-------

Apache 2.0 - See [LICENSE](https://github.com/googleapis/google-cloud-java/blob/master/LICENSE) for more information.
