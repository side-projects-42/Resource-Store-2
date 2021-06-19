# encoding: utf-8
# This file is distributed under New Relic's license terms.
# See https://github.com/newrelic/newrelic-ruby-agent/blob/main/LICENSE for complete details.

require 'new_relic/agent/logging'

class LoggingTest < Performance::TestCase

  EXAMPLE_MESSAGE = 'This is an example message'.freeze

  def test_logging
    io = StringIO.new
    logger = NewRelic::Agent::Logging::DecoratingLogger.new io
    measure do
      logger.info EXAMPLE_MESSAGE
    end
  end
end
