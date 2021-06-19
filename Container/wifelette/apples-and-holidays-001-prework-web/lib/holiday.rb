require 'pry'

def second_supply_for_fourth_of_july(holiday_hash)
  holiday_hash[:summer][:fourth_of_july][1]
end

def add_supply_to_winter_holidays(holiday_hash, supply)
  holiday_hash[:winter][:christmas].push(supply)
  holiday_hash[:winter][:new_years].push(supply)
end
 

def add_supply_to_memorial_day(holiday_hash, supply)
  holiday_hash[:spring][:memorial_day].push(supply)
end

def add_new_holiday_with_supplies(holiday_hash, season, holiday_name, supply_array)
  holiday_hash[season][holiday_name] = supply_array
  holiday_hash
end

def all_winter_holiday_supplies(holiday_hash)
  holiday_hash[:winter].values.flatten
end

def all_supplies_in_holidays(holiday_hash)
  holiday_hash.each do |season, specific_holidays|
    new_season = season[0].upcase + season[1..-1]
    puts "#{new_season}:"
    specific_holidays.each do |holiday, props|
      new_holiday = holiday.to_s.split("_").map do |word|
        word[0].upcase + word[1..-1]
      end.join(" ")
      new_props = props.join(", ")
      puts "  #{new_holiday}: #{new_props}"
    end
  end
end

def all_holidays_with_bbq(holiday_hash)
  bbq_holidays = []
  holiday_hash.each do |season, holiday_names|
    holiday_names.each do |holiday, props|
      bbq_holidays << holiday if props.include?("BBQ")
    end
  end
  bbq_holidays
end







