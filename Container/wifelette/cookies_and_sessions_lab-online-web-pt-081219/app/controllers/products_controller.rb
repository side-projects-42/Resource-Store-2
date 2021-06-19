# frozen_string_literal: true

class ProductsController < ApplicationController
  def index; end

  def add
    cart << params[:product]
    render :index
  end
end
