#!/usr/bin/env ruby
# Benchmark solutions to New Relic's metaprogramming counter challenge.
#
# ./tmp/program.rb is auto generated by the test cases.
require 'benchmark'
require 'fileutils'

SOLUTION_FILE = ARGV[0]
unless SOLUTION_FILE
  warn "usage #$0 <SOLUTION_FILE>"
  exit 1
end
module Bencher
  extend self

  def workspace
    File.expand_path(File.dirname(__FILE__) + '/tmp')
  end

  def program_path
    workspace + '/program.rb'
  end

  def solution_path
    SOLUTION_FILE
  end

  def create_program(source)
    FileUtils.mkdir_p(workspace)
    File.open(program_path, 'w') do |f|
      f.print source
    end
  end

  def execute_program(count_calls_to, source)
    create_program(source)
    `COUNT_CALLS_TO='#{count_calls_to}' ruby -r #{solution_path} #{program_path} 2>&1`
  end

  def execute_program_without_instrumentation(source)
    create_program(source)
    `#{program_path} 2>&1`
  end


  def benchmark(name, count_calls_to, source)
    Benchmark.bm(50) do |x|
      x.report("#{name} baseline") do
        execute_program_without_instrumentation(source)
      end
      x.report(name) do
        execute_program(count_calls_to, source)
      end
    end
  end
end

Bencher.benchmark('standard lib class and method', 'String#to_s', <<-RB)
  100_000.times{ "foo".to_s }
RB

Bencher.benchmark('method defined in class', 'A#b', <<-RB)
  class A; def b; end; end
  100_000.times{ A.new.b }
RB

# some solutions (such as asm) have significant startup overhead but less
# runtime overhead.  A longer benchmark shows the benefit of this approach.
Bencher.benchmark('method defined in class more times', 'A#b', <<-RB)
  class A; def b; end; end
  1_000_000.times{ A.new.b }
RB

Bencher.benchmark('two methods called alternately', 'A#b', <<-RB)
  class A; def b; end; def c; end; end
  100_000.times{ A.new.b; A.new.c }
RB

Bencher.benchmark('method included through module', 'B#b', <<-RB)
  module A; def b; end; end
  class B; include A; end
  100_000.times{ B.new.b }
RB

Bencher.benchmark('two method included called alternately', 'B#b', <<-RB)
  module A; def b; end; def c; end; end
  class B; include A; end
  100_000.times{ B.new.b; B.new.c }
RB