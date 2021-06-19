class ApplicationRecord < ActiveRecord::Base
  # TL;DR you can subclass, this isn't a "real" table, just a superClass for other Models to inherit from. Rails is not going to expect there to be a table in my DB called application_records.
  self.abstract_class = true
end
