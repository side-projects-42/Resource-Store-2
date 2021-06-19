class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy, :delete]

  def index
    if params[:name]
      @events = Event.where('name LIKE ?', "%#{params[:name]}%")
    else
      @events_current = Event.not_yet_happened
      @events_past = Event.already_happened
    end
  end

  def current
    # These views aren't really useful at this stage, but the project requirement specified views for the Scope method. 
    # I already have them in some of the Controller#index views but am double-ticking the box just to be sure.
    @events = Event.not_yet_happened
  end

  def past
    @events = Event.already_happened
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.create(event_params)
    if @event.save
      redirect_to @event
    else
      # Needs render instead of redirect so that the @event remains even if the save fails, to trigger field_with_errors
      render :new 
    end
  end

  def show
  end

  def edit
  end

  def update
    @event.update(event_params)
    if @event.save
      flash[:green] = "Event has been updated."
      redirect_to @event
    else
      render :edit
    end
  end

  def destroy
    @event.destroy
    flash[:red] = "Event has been deleted."
    redirect_to events_path
  end

  private
  
  def event_params
    params.require(:event).permit(:name, :start_date, :end_date, :location)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
