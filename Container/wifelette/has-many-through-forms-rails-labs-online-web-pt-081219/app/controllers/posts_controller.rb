class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    # @comment = Comment.new
    @comment = @post.comments.build
    @comment.build_user
  end

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
    3.times do 
      @post.categories.build
    end
  end

  def create
    post = Post.create(post_params)
    redirect_to post
  end

  private

  def post_params
    permitted_params = params.require(:post).permit(:title, :content, category_ids: [], categories_attributes: [:name])
    permitted_params[:categories_attributes].reject! { |_i, cat| cat[:name].blank? }
    permitted_params
  end
end
