class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

  def when
    date = self.appointment_datetime.strftime("%B %d, %Y")
    time = self.appointment_datetime.strftime("%H:%M")
    
    "#{date} at #{time}"
  end
end
