# Copyright (c) 2006-2010 Nick Sieger <nicksieger@gmail.com>
# See the file LICENSE.txt included with the distribution for
# software license details.

require File.expand_path('../utils', __FILE__)

namespace :ci do
  namespace :setup do
    task :cucumber_report_cleanup do
      rm_rf ENV["CI_REPORTS"] || "features/reports"
    end

    task :cucumber => :cucumber_report_cleanup do
      cuke_opts = ["--require", CI::Reporter.maybe_quote_filename("#{File.dirname(__FILE__)}/cucumber_loader.rb"),
        "--format", "CI::Reporter::Cucumber"].join(" ")
      ENV["CUCUMBER_OPTS"] = "#{ENV['CUCUMBER_OPTS']} #{cuke_opts}"
    end
  end
end
