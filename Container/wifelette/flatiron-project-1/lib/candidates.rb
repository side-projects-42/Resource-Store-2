require "candidates/version"
require "candidates/cli"
require "candidates/candidate"
require "candidates/development" if ENV["CANDIDATES_DEV"]
require "candidates/errors"
require "pry-byebug"

# By convention, you always start with a new Module with the same name as your package/gem.
module Candidates
end