def roll_call_dwarves(array)
	list_number = 1
	array.each do |name|
  	puts "#{list_number}. #{name}"
		list_number +=1
  end
end

def summon_captain_planet(planeteer_calls)
  planeteer_calls.collect do |call|
		call = call.capitalize
		"#{call}!"
	end
end

def long_planeteer_calls(calls_array)
  calls_array.any? do |call|
		call.length > 4
	end
end

def find_the_cheese(array)
  cheese_types = ["cheddar", "gouda", "camembert"]
	array.find do |food|
		cheese_types.include?(food)
	end
end
