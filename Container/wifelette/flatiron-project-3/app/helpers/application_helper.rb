module ApplicationHelper
  def prettydate(date)
    if date.present?
      # Sometimes there's no @event.date; it's not required. Return nil, instead of having an error or returning a different string, like "no date"
      date.strftime("%A, %B %d, %Y")
    end
  end
end
