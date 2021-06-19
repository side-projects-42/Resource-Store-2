class ActivitiesController < ApplicationController
  def index
    respond_with ActivityResource.all(params)
  end

  def show 
    respond_with ActivityResource.find(params)
  end

  def destroy
    respond_with ActivityResource.find(params).destroy
  end

  def create
    # assume that POST requests to materials are always trying o create materials
    params["data"]["type"] = "activities"
    resource = ActivityResource.build(params)
    resource.save
    respond_with resource
  end
end
