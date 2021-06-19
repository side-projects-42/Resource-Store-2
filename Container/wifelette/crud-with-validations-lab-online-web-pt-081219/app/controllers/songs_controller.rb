class SongsController < ApplicationController
  before_action :set_song!, only: [:show, :edit, :update, :destroy]

  def new
    @song = Song.new
  end

  def create
    @song = Song.new(song_params)
    
    if @song.valid?
      @song.save!
      redirect_to song_path(@song)
    else
      render :new
    end
  end

  def edit
  end

  def update
    @song.assign_attributes(song_params)

    if @song.valid?
      @song.save!
      redirect_to song_path(@song)
    else
      render :edit
    end
  end

  def destroy
    @song.destroy
    redirect_to songs_url
  end

  def index
    @songs = Song.all
  end

  def show
  end

  private

  def song_params
    params.require(:song).permit(:title, :artist_name, :released, :release_year, :genre)
  end

  def set_song!
    @song = Song.find(params[:id])
  end
end
