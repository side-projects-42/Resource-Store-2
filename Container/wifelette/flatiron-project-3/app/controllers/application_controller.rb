class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  # protected

  # If you add any new fields to the user/sign-up table, you'll need to add them to the permitted params, like so:
  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:new_param])
  # end
end
