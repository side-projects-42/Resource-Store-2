class DaysController < ApplicationController
  def index
    # This was my first stab at this:
    # render json: Day.all, include: { activities: { only: [:materials, :name] } }

    # Then this was my second, which involved me investigating Graphiti to make the nesting of the JSON structure simpler to create and manage:
    # render json: DayResource.all({ include: "activities.materials" })

    # Then this is my third and final version. This way lets the client-side decide what it can get, by giving it everything and letting it filter. Versus trying to guess at it here.
    respond_with DayResource.all(params)
    # ^ This is "the responder API" in Rails. It's saying "return the right kind of response, based on what the client-side asks for". As an alternative I previously just had `render json:` with the same DayResource...
  end

  def show
    respond_with DayResource.find(params)
  end

  def destroy
    respond_with DayResource.find(params).destroy
  end

  def create
    # assume that POST requests to days are always trying to create days
    params["data"]["type"] = "days"
    resource = DayResource.build(params)
    resource.save
    respond_with resource
  end

  def update
    # assume that POST requests to days are always trying to create days
    params["data"]["type"] = "days"
    params["data"]["id"] = params[:id].to_i
    resource = DayResource.find(params)
    respond_with resource.update_attributes
  end
end
