class CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)
    redirect_to comment.post
  end

  private

  def comment_params
    permitted_params = params.require(:comment).permit(:content, :post_id, :user_id, user_attributes: [:username])

    if permitted_params[:user_id].present?
      permitted_params.delete(:user_attributes)
    else
      permitted_params.delete(:user_id)
    end
    permitted_params
  end
end
