module Candidates
  class CandidatesError < StandardError
  end

  class MissingUserError < CandidatesError
    def initialize(user)
      @user = user
    end

    def message
      "\nWhoops! There's no Github user named #{PASTEL.magenta.bold("#{@user}")}. Try again?"
    end
  end

  module ErrorHandling
    # This method takes a block. First, it attempts to run the block. If the block succeeds, it returns
    # the value that the block returned (`yield`).
    #
    # If the block raises an exception:
    # - If the exception is a `CandidatesError`, pretty-print the error and retry the block
    # - If it's another kind of error, print a warning as well as the stack trace and don't
    #   retry--since at that point I'll basically have no idea wtf is happening :p 
    def keep_trying
      yield
    rescue CandidatesError => e
      puts PASTEL.red.bold(e.message)
      retry
    rescue StandardError => e
      # This is for unpredictable errors other than the most common one, MissingUserError
      puts PASTEL.red.bold("An unexpected error occurred")
      puts "---"
      puts e.full_message
      exit
    end
  end
end