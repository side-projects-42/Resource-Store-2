class MaterialsController < ApplicationController
  def index
    respond_with MaterialResource.all(params)
  end

  def show
    respond_with MaterialResource.find(params)
  end

  def destroy
    respond_with MaterialResource.find(params).destroy
  end

  def create
    # assume that POST requests to materials are always trying o create materials
    params["data"]["type"] = "materials"
    resource = MaterialResource.build(params)
    resource.save
    respond_with resource
  end
end