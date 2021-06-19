lib = File.expand_path("lib", __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "candidates/version"

Gem::Specification.new do |spec|
  spec.name          = "candidates"
  spec.version       = Candidates::VERSION
  spec.authors       = ["wifelette"]
  spec.email         = ["leahsilber@gmail.com"]

  spec.summary       = "Collect information about a developer candidate"
  spec.license       = "MIT"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "awesome_print", "~> 1.8"
  spec.add_runtime_dependency "httparty", "~> 0.17.1"
  spec.add_runtime_dependency "pastel", "~> 0.7.3"
  spec.add_runtime_dependency "thor", "~> 0.20.3"
  spec.add_runtime_dependency "tty-markdown", "~> 0.6.0"
  spec.add_runtime_dependency "tty-prompt", "~> 0.19.0"
  spec.add_runtime_dependency "tty-table", "~> 0.11.0"
  spec.add_runtime_dependency "twitter_cldr", "~> 4.4.3"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "webmock", "~> 2.1.0"
end
