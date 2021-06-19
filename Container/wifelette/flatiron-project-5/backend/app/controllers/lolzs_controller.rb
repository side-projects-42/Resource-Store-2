# This is only here to serve as a template for me to follow. It's the standard ways to use these controller actions with the Graphiti library.

class LolzsController < ApplicationController
  def index
    lolzs = LolzResource.all(params)
    respond_with(lolzs)
  end

  def show
    lolz = LolzResource.find(params)
    respond_with(lolz)
  end

  def create
    lolz = LolzResource.build(params)

    if lolz.save
      render jsonapi: lolz, status: 201
    else
      render jsonapi_errors: lolz
    end
  end

  def update
    lolz = LolzResource.find(params)

    if lolz.update_attributes
      render jsonapi: lolz
    else
      render jsonapi_errors: lolz
    end
  end

  def destroy
    lolz = LolzResource.find(params)

    if lolz.destroy
      render jsonapi: { meta: {} }, status: 200
    else
      render jsonapi_errors: lolz
    end
  end
end
