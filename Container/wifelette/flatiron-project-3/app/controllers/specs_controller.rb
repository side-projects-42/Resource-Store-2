class SpecsController < ApplicationController
  before_action :set_package, except: [:create, :destroy]

  def new
    @spec = Spec.new
  end
  
  def create
    Spec.create(params[:spec].permit(:perk_id, :package_id, :qty))
    redirect_back fallback_location: @package
  end

  def destroy
    spec = Spec.find(params[:id])
    spec.destroy
    # There were previously multiple delete buttons in different places, and I wanted it to basically go back to whichever place it came from.
    # Fallback_location says "if for some reason Rails can't figure out what back means, then go to X location."
    redirect_back fallback_location: @package
  end

  private

  def set_package
    @package = Package.find(params[:package_id])
  end
end
