exports['GitHub commentOnIssue can create a comment 1'] = {
  "body": "This is a comment"
}

exports['GitHub commitsSince finds commits up until a condition 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "files": []
  }
]

exports['GitHub commitsSince finds first commit of a multi-commit merge pull request 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "files": []
  }
]

exports['GitHub commitsSince limits pagination 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "files": []
  },
  {
    "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
    "message": "fix: feature-branch-merge fix 1",
    "files": []
  },
  {
    "sha": "a257514a541d483425118d973674b1ce006a5489",
    "message": "chore: feature-branch-merge lint",
    "files": []
  },
  {
    "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
    "message": "feat: feature-branch-merge commit 2",
    "files": []
  },
  {
    "sha": "520b6f42551c86002197d033564a76a3f99b0019",
    "message": "feat: feature-branch-merge commit 1",
    "files": []
  },
  {
    "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
    "message": "chore(main): release 0.1.1-SNAPSHOT (#3)",
    "files": []
  },
  {
    "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
    "message": "feat: feature-branch that will be squash merged (#2)\n\n* feat: feature-branch commit 1\r\n\r\n* feat: feature-branch commit 2\r\n\r\n* chore: fix lint\r\n\r\n* fix: feature-branch fix 1",
    "files": []
  },
  {
    "sha": "0cda26c2e7776748072ba5a24302474947b3ebbd",
    "message": "build: add release-please bot",
    "files": []
  }
]

exports['GitHub commitsSince paginates through commits 1'] = [
  {
    "sha": "e6daec403626c9987c7af0d97b34f324cd84320a",
    "message": "Merge pull request #7 from chingor13/feature-branch-plain-merge\n\nfeat: feature that will be plain merged",
    "files": []
  },
  {
    "sha": "b29149f890e6f76ee31ed128585744d4c598924c",
    "message": "feat: feature-branch-plain-merge commit 2",
    "files": []
  },
  {
    "sha": "27d7d7232e2e312d1380e906984f0823f5decf61",
    "message": "feat: feature-branch-plain-merge commit 1",
    "files": []
  },
  {
    "sha": "2b4e0b3be2e231cd87cc44c411bd8f84b4587ab5",
    "message": "fix: feature-branch-merge fix 1",
    "files": []
  },
  {
    "sha": "a257514a541d483425118d973674b1ce006a5489",
    "message": "chore: feature-branch-merge lint",
    "files": []
  },
  {
    "sha": "b6a8ab1a50106cfb03f22c2cdaf7abfdcccce088",
    "message": "feat: feature-branch-merge commit 2",
    "files": []
  },
  {
    "sha": "520b6f42551c86002197d033564a76a3f99b0019",
    "message": "feat: feature-branch-merge commit 1",
    "files": []
  },
  {
    "sha": "9dda1a331d311d0a7643015cc9e6802548c8d943",
    "message": "chore(main): release 0.1.1-SNAPSHOT (#3)",
    "files": []
  },
  {
    "sha": "e86984fb22ccc5eafb6c3d815851ade3463193da",
    "message": "feat: feature-branch that will be squash merged (#2)\n\n* feat: feature-branch commit 1\r\n\r\n* feat: feature-branch commit 2\r\n\r\n* chore: fix lint\r\n\r\n* fix: feature-branch fix 1",
    "files": []
  },
  {
    "sha": "0cda26c2e7776748072ba5a24302474947b3ebbd",
    "message": "build: add release-please bot",
    "files": []
  },
  {
    "sha": "959ee48c95f254300eb040c46ebdc8248317efe4",
    "message": "Release v0.1.0 (#1)",
    "files": []
  }
]

exports['GitHub commitsSinceSha prefixes commits with labels from associated pull requests 1'] = [
  {
    "sha": "fcd1c890dc1526f4d62ceedad561f498195c8939",
    "message": "Refactor shared IAM-based signing (#292)\n\n* Extract IAM signing into its own class\r\n\r\n* Refactor into IamUtils package private class\r\n\r\n* Remove unnecessary class\r\n\r\n* Remove unused code\r\n\r\n* Cleanup imports\r\n\r\n* Fill out javadoc for IamUtils\r\n\r\n* Failing tests for impersonated credentials\r\n\r\n* Fix credentials used for signing\r\n\r\n* Fix providing delegates to signing request\r\n\r\n* Disallow null additionalFields, remove jsr305 annotation\r\n\r\n* Remove usued imports",
    "files": []
  },
  {
    "sha": "1f9663cf08ab1cf3b68d95dee4dc99b7c4aac373",
    "message": "Update allowed header format (#301)\n\n* Update copyright format  \r\n\r\n@chingor13\r\n\r\n* Update java.header\r\n\r\n* add legacy copyright\r\n\r\n* remove spurious $",
    "files": []
  },
  {
    "sha": "3006009a2b1b2cb4bd5108c0f469c410759f3a6a",
    "message": "Upgrade Guava to 28.0-android (#300)",
    "files": []
  }
]

exports['GitHub commitsSinceSha retries the graphql on a timeout 1'] = [
  {
    "sha": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42",
    "message": "fix: Update PubSub timeouts. (#1967)",
    "files": [
      "PubSub/src/V1/resources/subscriber_client_config.json",
      "PubSub/synth.metadata"
    ]
  },
  {
    "sha": "269cf923ea6fd0375abaf0bb19790475693c6f90",
    "message": "fix: Assorted minor fixes for Cloud Datastore client (#1964)",
    "files": [
      "Datastore/src/Connection/Grpc.php",
      "Datastore/src/DatastoreClient.php",
      "Datastore/src/Entity.php",
      "Datastore/src/EntityIterator.php",
      "Datastore/src/EntityMapper.php",
      "Datastore/src/Key.php",
      "Datastore/src/Operation.php",
      "Datastore/src/TransactionTrait.php"
    ]
  },
  {
    "sha": "da356f004ff891e11a369fd634f55d6abade708f",
    "message": "Prepare v0.102.0 (#1965)",
    "files": [
      "AutoMl/VERSION",
      "Debugger/VERSION",
      "Debugger/src/DebuggerClient.php",
      "Dialogflow/VERSION",
      "Firestore/VERSION",
      "Firestore/src/FirestoreClient.php",
      "Language/VERSION",
      "Language/src/LanguageClient.php",
      "Speech/VERSION",
      "Speech/src/SpeechClient.php",
      "Tasks/VERSION",
      "Vision/VERSION",
      "Vision/src/VisionClient.php",
      "WebSecurityScanner/VERSION",
      "composer.json",
      "docs/manifest.json",
      "src/ServiceBuilder.php",
      "src/Version.php"
    ]
  },
  {
    "sha": "fa5761e9e52f36506a72a9292843259d198468b0",
    "message": "feat: Add Web Security Center Client (#1961)\n\n* add synth script\r\n\r\n* generate web security scanner\r\n\r\n* add to docs site\r\n\r\n* update README\r\n\r\n* update composer\r\n\r\n* remove whitespace in sample\r\n\r\n* add phpunit config\r\n\r\n* add hyperlink\r\n\r\n* autoload tests\r\n\r\n* more autoload fixes",
    "files": [
      "README.md",
      "WebSecurityScanner/.gitattributes",
      "WebSecurityScanner/.github/pull_request_template.md",
      "WebSecurityScanner/CONTRIBUTING.md",
      "WebSecurityScanner/LICENSE",
      "WebSecurityScanner/README.md",
      "WebSecurityScanner/composer.json",
      "WebSecurityScanner/metadata/V1Beta/CrawledUrl.php",
      "WebSecurityScanner/metadata/V1Beta/Finding.php",
      "WebSecurityScanner/metadata/V1Beta/FindingAddon.php",
      "WebSecurityScanner/metadata/V1Beta/FindingTypeStats.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfig.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfigError.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRun.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/metadata/V1Beta/WebSecurityScanner.php",
      "WebSecurityScanner/phpunit.xml.dist",
      "WebSecurityScanner/src/V1beta/CrawledUrl.php",
      "WebSecurityScanner/src/V1beta/CreateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/DeleteScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/Finding.php",
      "WebSecurityScanner/src/V1beta/FindingTypeStats.php",
      "WebSecurityScanner/src/V1beta/Form.php",
      "WebSecurityScanner/src/V1beta/Gapic/WebSecurityScannerGapicClient.php",
      "WebSecurityScanner/src/V1beta/GetFindingRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsResponse.php",
      "WebSecurityScanner/src/V1beta/OutdatedLibrary.php",
      "WebSecurityScanner/src/V1beta/README.md",
      "WebSecurityScanner/src/V1beta/ScanConfig.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError/Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError_Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanRun.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ResultState.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ResultState.php",
      "WebSecurityScanner/src/V1beta/StartScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/StopScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/UpdateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/ViolatingResource.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders/Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders_Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableParameters.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerClient.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerGrpcClient.php",
      "WebSecurityScanner/src/V1beta/Xss.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_client_config.json",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_descriptor_config.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_rest_client_config.php",
      "WebSecurityScanner/synth.metadata",
      "WebSecurityScanner/synth.py",
      "WebSecurityScanner/tests/Unit/V1beta/WebSecurityScannerClientTest.php",
      "composer.json",
      "docs/contents/cloud-web-security-scanner.json",
      "docs/contents/google-cloud.json",
      "docs/manifest.json"
    ]
  },
  {
    "sha": "8db7f3b19c46c873897d79c89ce35b8492e5fe60",
    "message": "feat: move speech from alpha -> beta (#1962)",
    "files": [
      "README.md",
      "Speech/README.md"
    ]
  },
  {
    "sha": "52f4fbfa1fc3fde585c84e64ef40571d2b85d72e",
    "message": "fix: correctly label as beta (#1963)",
    "files": [
      "AutoMl/README.md"
    ]
  },
  {
    "sha": "da6e52d956c1e35d19e75e0f2fdba439739ba364",
    "message": "feat: Add mp3 encoding and context hint boost support. (#1959)",
    "files": [
      "Speech/metadata/V1P1Beta1/CloudSpeech.php",
      "Speech/src/V1p1beta1/RecognitionConfig/AudioEncoding.php",
      "Speech/src/V1p1beta1/SpeechContext.php",
      "Speech/synth.metadata"
    ]
  },
  {
    "sha": "bf69d0f204474b88b3f8b5a72a392129d16a3929",
    "message": "fix: language system test (#1958)",
    "files": [
      "Language/tests/System/AnalyzeTest.php"
    ]
  },
  {
    "sha": "a8b5b0bc9e9ed7998e30983834f7d841b6a37d6f",
    "message": "fix: continue switch targeting warning in PHP 7.3 (#1957)",
    "files": [
      "Debugger/src/Agent.php"
    ]
  }
]

exports['GitHub commitsSinceSha returns commits immediately before sha 1'] = [
  {
    "sha": "0a8477108a26aeb21d7af06e62be4ae5cb00ad42",
    "message": "fix: Update PubSub timeouts. (#1967)",
    "files": [
      "PubSub/src/V1/resources/subscriber_client_config.json",
      "PubSub/synth.metadata"
    ]
  },
  {
    "sha": "269cf923ea6fd0375abaf0bb19790475693c6f90",
    "message": "fix: Assorted minor fixes for Cloud Datastore client (#1964)",
    "files": [
      "Datastore/src/Connection/Grpc.php",
      "Datastore/src/DatastoreClient.php",
      "Datastore/src/Entity.php",
      "Datastore/src/EntityIterator.php",
      "Datastore/src/EntityMapper.php",
      "Datastore/src/Key.php",
      "Datastore/src/Operation.php",
      "Datastore/src/TransactionTrait.php"
    ]
  },
  {
    "sha": "da356f004ff891e11a369fd634f55d6abade708f",
    "message": "Prepare v0.102.0 (#1965)",
    "files": [
      "AutoMl/VERSION",
      "Debugger/VERSION",
      "Debugger/src/DebuggerClient.php",
      "Dialogflow/VERSION",
      "Firestore/VERSION",
      "Firestore/src/FirestoreClient.php",
      "Language/VERSION",
      "Language/src/LanguageClient.php",
      "Speech/VERSION",
      "Speech/src/SpeechClient.php",
      "Tasks/VERSION",
      "Vision/VERSION",
      "Vision/src/VisionClient.php",
      "WebSecurityScanner/VERSION",
      "composer.json",
      "docs/manifest.json",
      "src/ServiceBuilder.php",
      "src/Version.php"
    ]
  },
  {
    "sha": "fa5761e9e52f36506a72a9292843259d198468b0",
    "message": "feat: Add Web Security Center Client (#1961)\n\n* add synth script\r\n\r\n* generate web security scanner\r\n\r\n* add to docs site\r\n\r\n* update README\r\n\r\n* update composer\r\n\r\n* remove whitespace in sample\r\n\r\n* add phpunit config\r\n\r\n* add hyperlink\r\n\r\n* autoload tests\r\n\r\n* more autoload fixes",
    "files": [
      "README.md",
      "WebSecurityScanner/.gitattributes",
      "WebSecurityScanner/.github/pull_request_template.md",
      "WebSecurityScanner/CONTRIBUTING.md",
      "WebSecurityScanner/LICENSE",
      "WebSecurityScanner/README.md",
      "WebSecurityScanner/composer.json",
      "WebSecurityScanner/metadata/V1Beta/CrawledUrl.php",
      "WebSecurityScanner/metadata/V1Beta/Finding.php",
      "WebSecurityScanner/metadata/V1Beta/FindingAddon.php",
      "WebSecurityScanner/metadata/V1Beta/FindingTypeStats.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfig.php",
      "WebSecurityScanner/metadata/V1Beta/ScanConfigError.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRun.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/metadata/V1Beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/metadata/V1Beta/WebSecurityScanner.php",
      "WebSecurityScanner/phpunit.xml.dist",
      "WebSecurityScanner/src/V1beta/CrawledUrl.php",
      "WebSecurityScanner/src/V1beta/CreateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/DeleteScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/Finding.php",
      "WebSecurityScanner/src/V1beta/FindingTypeStats.php",
      "WebSecurityScanner/src/V1beta/Form.php",
      "WebSecurityScanner/src/V1beta/Gapic/WebSecurityScannerGapicClient.php",
      "WebSecurityScanner/src/V1beta/GetFindingRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/GetScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsRequest.php",
      "WebSecurityScanner/src/V1beta/ListCrawledUrlsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingTypeStatsResponse.php",
      "WebSecurityScanner/src/V1beta/ListFindingsRequest.php",
      "WebSecurityScanner/src/V1beta/ListFindingsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanConfigsResponse.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsRequest.php",
      "WebSecurityScanner/src/V1beta/ListScanRunsResponse.php",
      "WebSecurityScanner/src/V1beta/OutdatedLibrary.php",
      "WebSecurityScanner/src/V1beta/README.md",
      "WebSecurityScanner/src/V1beta/ScanConfig.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Authentication/GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig/UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError/Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfigError_Code.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_CustomAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Authentication_GoogleAccount.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_ExportToSecurityCommandCenter.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_RiskLevel.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_Schedule.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_TargetPlatform.php",
      "WebSecurityScanner/src/V1beta/ScanConfig_UserAgent.php",
      "WebSecurityScanner/src/V1beta/ScanRun.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun/ResultState.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunErrorTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace/Code.php",
      "WebSecurityScanner/src/V1beta/ScanRunWarningTrace_Code.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ExecutionState.php",
      "WebSecurityScanner/src/V1beta/ScanRun_ResultState.php",
      "WebSecurityScanner/src/V1beta/StartScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/StopScanRunRequest.php",
      "WebSecurityScanner/src/V1beta/UpdateScanConfigRequest.php",
      "WebSecurityScanner/src/V1beta/ViolatingResource.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders/Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableHeaders_Header.php",
      "WebSecurityScanner/src/V1beta/VulnerableParameters.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerClient.php",
      "WebSecurityScanner/src/V1beta/WebSecurityScannerGrpcClient.php",
      "WebSecurityScanner/src/V1beta/Xss.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_client_config.json",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_descriptor_config.php",
      "WebSecurityScanner/src/V1beta/resources/web_security_scanner_rest_client_config.php",
      "WebSecurityScanner/synth.metadata",
      "WebSecurityScanner/synth.py",
      "WebSecurityScanner/tests/Unit/V1beta/WebSecurityScannerClientTest.php",
      "composer.json",
      "docs/contents/cloud-web-security-scanner.json",
      "docs/contents/google-cloud.json",
      "docs/manifest.json"
    ]
  },
  {
    "sha": "8db7f3b19c46c873897d79c89ce35b8492e5fe60",
    "message": "feat: move speech from alpha -> beta (#1962)",
    "files": [
      "README.md",
      "Speech/README.md"
    ]
  },
  {
    "sha": "52f4fbfa1fc3fde585c84e64ef40571d2b85d72e",
    "message": "fix: correctly label as beta (#1963)",
    "files": [
      "AutoMl/README.md"
    ]
  },
  {
    "sha": "da6e52d956c1e35d19e75e0f2fdba439739ba364",
    "message": "feat: Add mp3 encoding and context hint boost support. (#1959)",
    "files": [
      "Speech/metadata/V1P1Beta1/CloudSpeech.php",
      "Speech/src/V1p1beta1/RecognitionConfig/AudioEncoding.php",
      "Speech/src/V1p1beta1/SpeechContext.php",
      "Speech/synth.metadata"
    ]
  },
  {
    "sha": "bf69d0f204474b88b3f8b5a72a392129d16a3929",
    "message": "fix: language system test (#1958)",
    "files": [
      "Language/tests/System/AnalyzeTest.php"
    ]
  },
  {
    "sha": "a8b5b0bc9e9ed7998e30983834f7d841b6a37d6f",
    "message": "fix: continue switch targeting warning in PHP 7.3 (#1957)",
    "files": [
      "Debugger/src/Agent.php"
    ]
  }
]

exports['GitHub createRelease should create a release with a package prefix 1'] = {
  "tag_name": "v1.2.3",
  "target_commitish": "abc123",
  "body": "Some release notes",
  "name": "my package v1.2.3",
  "draft": false
}

exports['GitHub createRelease should create a release without a package prefix 1'] = {
  "tag_name": "v1.2.3",
  "target_commitish": "abc123",
  "body": "Some release notes",
  "name": "v1.2.3",
  "draft": false
}

exports['GitHub findFilesByExtension returns files matching the requested pattern 1'] = [
  "appengine/pom.xml",
  "bom/pom.xml",
  "credentials/pom.xml",
  "oauth2_http/pom.xml",
  "pom.xml"
]

exports['GitHub findFilesByfilename returns files matching the requested pattern 1'] = [
  "appengine/pom.xml",
  "bom/pom.xml",
  "credentials/pom.xml",
  "oauth2_http/pom.xml",
  "pom.xml"
]

exports['GitHub findMergedPullRequests finds merged pull requests with labels 1'] = [
  {
    "sha": "02760f5cb01fb358de95705713fd310bb3e5429b",
    "number": 2807,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.19.1-SNAPSHOT",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "chore: Bump next snapshot",
    "body": "This pull request was generated using releasetool.\n\nBump snapshot"
  },
  {
    "sha": "5059935bf1065b90da7bc55999c92b56cc254289",
    "number": 2806,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.19.0",
    "labels": [
      "api: bigtable",
      "autorelease: published",
      "cla: yes"
    ],
    "title": "chore: Release cloud-bigtable-client v1.19.0",
    "body": "This pull request was generated using releasetool.\r\n\r\n01-19-2021 07:24 PST\r\n\r\n### New Features\r\n- feat: align grpc channel ids in bigtable exceptions ([#2804](https://github.com/googleapis/java-bigtable-hbase/pull/2804))"
  },
  {
    "sha": "5fcd3cb0cec1113e997d57bf85c4dbdd87511bcc",
    "number": 2804,
    "baseRefName": "bigtable-1.x",
    "headRefName": "better-channel-ids",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "feat: align grpc channel ids in bigtable exceptions",
    "body": "Currently bigtable client annotates its error messages with sequential channel ids which are unrelated to actual grpc log ids. This PR bubbles up both to make it easier top correlate with grpc verbose logging"
  },
  {
    "sha": "fd4fa187084403ee669b466f9cb4eb225c2d1bce",
    "number": 2793,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-java-bigtable-hbase-v1.18.3-SNAPSHOT",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "Bump next snapshot",
    "body": "This pull request was generated using releasetool.\n\nBump snapshot"
  },
  {
    "sha": "ab056dcc0696e492c93aee529692e9fbce01943c",
    "number": 2792,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-java-bigtable-hbase-v1.18.2",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "Release java-bigtable-hbase v1.18.2",
    "body": "This pull request was generated using releasetool.\r\n\r\n01-06-2021 11:50 PST\r\n\r\n### Dependencies\r\n- deps: update veneer version to 1.19.2 ([#2766](https://github.com/googleapis/java-bigtable-hbase/pull/2766))\r\n\r\n### Documentation\r\n- Remove disrespectful terms ([#2777](https://github.com/googleapis/java-bigtable-hbase/pull/2777))\r\n\r\n### Bug Fixes\r\n- fix: Fix autoflush race condition in BulkMutation ([#2762](https://github.com/googleapis/java-bigtable-hbase/pull/2762))\r\n- Non-retriable operations should ignore attempt timeout and default to RPC timeout instead ([#2756](https://github.com/googleapis/java-bigtable-hbase/pull/2756))\r\n- fix: update readRowsAsync to use RetryingReadRowsOperation ([#2757](https://github.com/googleapis/java-bigtable-hbase/pull/2757))"
  },
  {
    "sha": "d914d22558b718adf38b0f713556c8b547ca1f6a",
    "number": 2777,
    "baseRefName": "bigtable-1.x",
    "headRefName": "terms-update",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "Remove disrespectful terms",
    "body": "Thank you for opening a Pull Request! Before submitting your PR, there are a few things you can do to make sure it goes smoothly:\r\n- [ ] Make sure to open an issue as a [bug/issue](https://github.com/googleapis/java-bigtable-hbase/issues/new/choose) before writing your code!  That way we can discuss the change, evaluate designs, and agree on the general idea\r\n- [ ] Ensure the tests and linter pass\r\n- [ ] Code coverage does not decrease (if any source code was changed)\r\n- [ ] Appropriate docs were updated (if necessary)\r\n\r\nFixes #<issue_number_goes_here> ☕️\r\n"
  },
  {
    "sha": "0254144531a3d5cee41ab823ddfd5f4d266be5f1",
    "number": 2766,
    "baseRefName": "bigtable-1.x",
    "headRefName": "veneer-1.19.1",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "deps: update veneer version to 1.19.2",
    "body": "\r\n"
  },
  {
    "sha": "ef2bfc53bd9ea8b3b126e2a00cee34b519e98ec4",
    "number": 2762,
    "baseRefName": "bigtable-1.x",
    "headRefName": "fix-autoflush",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "fix: Fix autoflush race condition in BulkMutation",
    "body": "Thank you for opening a Pull Request! Before submitting your PR, there are a few things you can do to make sure it goes smoothly:\r\n- [ ] Make sure to open an issue as a [bug/issue](https://github.com/googleapis/java-bigtable-hbase/issues/new/choose) before writing your code!  That way we can discuss the change, evaluate designs, and agree on the general idea\r\n- [x] Ensure the tests and linter pass\r\n- [x] Code coverage does not decrease (if any source code was changed)\r\n- [ ] Appropriate docs were updated (if necessary)\r\n\r\nFixes #<issue_number_goes_here> ☕️\r\n"
  },
  {
    "sha": "790c448d3b0aecf7fc3b0fbb74386052402d3264",
    "number": 2757,
    "baseRefName": "bigtable-1.x",
    "headRefName": "revert-2745-revert-1.x-fix",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "fix: update readRowsAsync to use RetryingReadRowsOperation (1x)",
    "body": "Roll forward of #2738 now that #2742 is merged"
  },
  {
    "sha": "927e9cd0848c508f4dd4c20f5d18eadc948a75f7",
    "number": 2756,
    "baseRefName": "bigtable-1.x",
    "headRefName": "checkAndMutateRowRetriable",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "fix: Non-retriable operations should ignore attempt timeout and default to RPC timeout instead",
    "body": ""
  },
  {
    "sha": "3937056dcc03379a015180a706a98efe646662c5",
    "number": 2747,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.18.2-SNAPSHOT",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "Bump next snapshot",
    "body": "This pull request was generated using releasetool.\n\nBump snapshot"
  },
  {
    "sha": "a7d964cf4b31ae07deb3d80367d6543cf567162e",
    "number": 2746,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.18.1",
    "labels": [
      "api: bigtable",
      "autorelease: tagged",
      "cla: yes"
    ],
    "title": "chore: Release cloud-bigtable-client v1.18.1",
    "body": "This pull request was generated using releasetool.\r\n\r\n12-10-2020 13:08 PST\r\n\r\n### Implementation Changes\r\n- fix: fix race condition where a retry triggers a full table scan ([#2742](https://github.com/googleapis/java-bigtable-hbase/pull/2742))\r\n\r\n### Dependencies\r\n- deps: update bigtable.version to 1.19.0 ([#2740](https://github.com/googleapis/java-bigtable-hbase/pull/2740))\r\n\r\n### Internal / Testing Changes\r\n- fix: update readRowsAsync to use RetryingReadRowsOperation ([#2738](https://github.com/googleapis/java-bigtable-hbase/pull/2738))\r\n- revert: Revert \"fix: update readRowsAsync to use RetryingReadRowsOperation ([#2738](https://github.com/googleapis/java-bigtable-hbase/pull/2738))\" ([#2745](https://github.com/googleapis/java-bigtable-hbase/pull/2745))\r\n- chore: synth updates for 1.x branch ([#2741](https://github.com/googleapis/java-bigtable-hbase/pull/2741))"
  },
  {
    "sha": "c5e4e0ea24bead61a1e797e8611667882cb4c068",
    "number": 2745,
    "baseRefName": "bigtable-1.x",
    "headRefName": "revert-1.x-fix",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "revert: Revert \"fix: update readRowsAsync to use RetryingReadRowsOperation (#2738)",
    "body": "…2738)\"\r\n\r\nThis reverts commit 2d422175\r\n"
  },
  {
    "sha": "d7521ad9619d7fc35e1cfe69682093a3977c7fa9",
    "number": 2742,
    "baseRefName": "bigtable-1.x",
    "headRefName": "fulltablescanretry",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "fix: fix race condition where a retry triggers a full table scan",
    "body": "There is a race condition where a read rows stream will return all of the data, but still end in a non-ok status. This will trigger a full table scan because the row resumption logic will strip away all of seem keys & ranges, leaving the retry request empty, will cause a full table scan.\r\n\r\nThis PR will detect this case and will replace the status code to be ok. This should be a very rare condition.\r\n"
  },
  {
    "sha": "6a924e15071ba96f9f26d7c36b22f922de76472d",
    "number": 2741,
    "baseRefName": "bigtable-1.x",
    "headRefName": "synth-updates-1.x",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "chore: synth updates for 1.x branch",
    "body": "\r\n"
  },
  {
    "sha": "79627e5c221b26bebaa796b8dd91b6b9ad7a7138",
    "number": 2740,
    "baseRefName": "bigtable-1.x",
    "headRefName": "veneer-update-1.19.0",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "deps: update bigtable.version to 1.19.0",
    "body": "\r\n"
  },
  {
    "sha": "2d4221751d5ac1e5f730c0c2ee8f2f0159aa4b71",
    "number": 2738,
    "baseRefName": "bigtable-1.x",
    "headRefName": "watchdog-retries",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "fix: update readRowsAsync to use RetryingReadRowsOperation",
    "body": "This will allow that method to inherit features like stream resumption and retry on stream timeouts.\r\n"
  },
  {
    "sha": "6a34e79dbf35035cea6530c37a73034b12779d14",
    "number": 2728,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.18.1-SNAPSHOT",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "chore: Bump next snapshot",
    "body": "This pull request was generated using releasetool.\n\nBump snapshot"
  },
  {
    "sha": "cf82b3730cee94ab4e13b36ee41dd95d6c89d016",
    "number": 2727,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.18.0",
    "labels": [
      "api: bigtable",
      "autorelease: tagged",
      "cla: yes"
    ],
    "title": "chore: Release cloud-bigtable-client v1.18.0",
    "body": "This pull request was generated using releasetool.\r\n\r\n12-03-2020 11:58 PST\r\n\r\n### New Features\r\n- Adding timeouts for RPC Retry Attempts for HBase client ([#2717](https://github.com/googleapis/java-bigtable-hbase/pull/2717))"
  },
  {
    "sha": "a097df63e2ae08f28317f9315c1899c988d4f0db",
    "number": 2717,
    "baseRefName": "bigtable-1.x",
    "headRefName": "attempt-timeout-1.x",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "feat: Adding timeouts for RPC Retry Attempts for HBase client (on bigtable-1.x branch)",
    "body": "We'd like to give user the ability to set a shorter timeout for individual RPC attempts within an overall timeout window (e.g. to allow multiple retries during the timeout window)"
  },
  {
    "sha": "0f4d8fe3885c007b10d8f3be0ad23db6caed33e3",
    "number": 2705,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.17.2-SNAPSHOT",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "chore: Bump next snapshot",
    "body": "This pull request was generated using releasetool.\n\nBump snapshot"
  },
  {
    "sha": "d1e045cfbda8d836fac76920ea9a85c5949c5a8c",
    "number": 2704,
    "baseRefName": "bigtable-1.x",
    "headRefName": "release-cloud-bigtable-client-v1.17.1",
    "labels": [
      "api: bigtable",
      "autorelease: tagged",
      "cla: yes"
    ],
    "title": "chore: Release cloud-bigtable-client v1.17.1",
    "body": "This pull request was generated using releasetool.\r\n\r\n11-18-2020 10:49 PST\r\n\r\n### Dependencies\r\n- deps: update mockito to 3.6.0 ([#2701](https://github.com/googleapis/java-bigtable-hbase/pull/2701))\r\n\r\n### Internal / Testing Changes\r\n- build: update distributionManagement in parent pom ([#2470](https://github.com/googleapis/java-bigtable-hbase/pull/2470)) ([#2699](https://github.com/googleapis/java-bigtable-hbase/pull/2699))"
  },
  {
    "sha": "9242415581247db67eaf77978106e700ff02af75",
    "number": 2701,
    "baseRefName": "bigtable-1.x",
    "headRefName": "deps-update",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "deps: update mockito to 3.6.0",
    "body": ""
  },
  {
    "sha": "91c9ebf002f350f1a4c906269afe580a1d7b80fe",
    "number": 2699,
    "baseRefName": "bigtable-1.x",
    "headRefName": "sonatype-update-1x",
    "labels": [
      "cla: yes"
    ],
    "title": "build: update distributionManagement in parent pom (#2470)",
    "body": "(cherry picked from commit 0a51cb8f500ec8da8cec58dcc0e37011a749d407)"
  },
  {
    "sha": "f0ab843d17c3ed09abfc8a5e4c00de767b9533f5",
    "number": 2698,
    "baseRefName": "bigtable-1.x",
    "headRefName": "travis-1.x",
    "labels": [
      "api: bigtable",
      "cla: yes"
    ],
    "title": "chore: disable travis (#2676)",
    "body": "(cherry picked from commit a03d7dcdd8458d5c3542ec2914a031afd69815cf)\r\n"
  }
]

exports['GitHub getFileContents should support Github Data API in case of a big file 1'] = {
  "sha": "2f3d2c47bf49f81aca0df9ffc49524a213a2dc33"
}