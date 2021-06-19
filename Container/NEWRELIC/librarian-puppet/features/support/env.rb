require 'aruba/cucumber'

Before do
  slow_boot = true
  slow_boot ||= RUBY_PLATFORM == "java"
  slow_boot ||= defined?(::Rubinius)

  @aruba_timeout_seconds = slow_boot ? 10 : 2
end
