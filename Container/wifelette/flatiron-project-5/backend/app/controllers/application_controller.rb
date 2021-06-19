class ApplicationController < ActionController::API
  # Graphiti is a tool I'm using to help build a nice, conventional API
  include Graphiti::Rails::Responders

  # This is copy/pasted; it says that every controller supports both json and jsonAPI; jsonAPI is the particular format Graphiti's UI tool (vandal) uses. I used that tool to help make it easy to construct the URLs my client-side JS is sending back to the Rails controllers.
  def self.inherited(klass)
    klass.class_eval do
      respond_to :json, :jsonapi
    end
  end

  # If Graphiti returns a record not found error, I'll treat it as a 404
  register_exception Graphiti::Errors::RecordNotFound,
                     status: 404
end
