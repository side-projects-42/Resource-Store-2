# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "autoparse"
  s.version = "0.3.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Bob Aman"]
  s.date = "2013-03-26"
  s.description = "An implementation of the JSON Schema specification. Provides automatic parsing\nfor any given JSON Schema.\n"
  s.email = "bobaman@google.com"
  s.extra_rdoc_files = ["README.md"]
  s.files = ["lib/autoparse", "lib/autoparse.rb", "lib/autoparse/inflection.rb", "lib/autoparse/instance.rb", "lib/autoparse/version.rb", "lib/compat", "lib/compat/multi_json.rb", "spec/autoparse", "spec/autoparse/instance_spec.rb", "spec/data", "spec/data/account.json", "spec/data/address.json", "spec/data/adult.json", "spec/data/booleans.json", "spec/data/calendar.json", "spec/data/card.json", "spec/data/file.json", "spec/data/filelist.json", "spec/data/geo.json", "spec/data/hyper-schema.json", "spec/data/interfaces.json", "spec/data/json-ref.json", "spec/data/links.json", "spec/data/node.json", "spec/data/parentref.json", "spec/data/person.json", "spec/data/positive.json", "spec/data/schema.json", "spec/data/user-list.json", "spec/spec.opts", "spec/spec_helper.rb", "tasks/clobber.rake", "tasks/gem.rake", "tasks/git.rake", "tasks/metrics.rake", "tasks/rdoc.rake", "tasks/spec.rake", "tasks/yard.rake", "CHANGELOG.md", "Gemfile", "LICENSE", "README.md", "Rakefile"]
  s.homepage = "http://autoparse.rubyforge.org/"
  s.rdoc_options = ["--main", "README.md"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "autoparse"
  s.rubygems_version = "1.8.24"
  s.summary = "A parsing system based on JSON Schema."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<addressable>, [">= 2.3.1"])
      s.add_runtime_dependency(%q<multi_json>, [">= 1.0.0"])
      s.add_runtime_dependency(%q<extlib>, [">= 0.9.15"])
      s.add_development_dependency(%q<rake>, [">= 0.9.0"])
      s.add_development_dependency(%q<rspec>, [">= 2.11.0"])
      s.add_development_dependency(%q<launchy>, [">= 2.1.1"])
    else
      s.add_dependency(%q<addressable>, [">= 2.3.1"])
      s.add_dependency(%q<multi_json>, [">= 1.0.0"])
      s.add_dependency(%q<extlib>, [">= 0.9.15"])
      s.add_dependency(%q<rake>, [">= 0.9.0"])
      s.add_dependency(%q<rspec>, [">= 2.11.0"])
      s.add_dependency(%q<launchy>, [">= 2.1.1"])
    end
  else
    s.add_dependency(%q<addressable>, [">= 2.3.1"])
    s.add_dependency(%q<multi_json>, [">= 1.0.0"])
    s.add_dependency(%q<extlib>, [">= 0.9.15"])
    s.add_dependency(%q<rake>, [">= 0.9.0"])
    s.add_dependency(%q<rspec>, [">= 2.11.0"])
    s.add_dependency(%q<launchy>, [">= 2.1.1"])
  end
end
