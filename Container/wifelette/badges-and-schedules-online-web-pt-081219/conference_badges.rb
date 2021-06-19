def badge_maker(name)
	"Hello, my name is #{name}."
end

def batch_badge_creator(array)
	array_of_names = []
	array.each do |name|
    greeting = badge_maker(name)
		array_of_names << greeting
	end
  array_of_names
end

def assign_rooms(speaker_list)
	room_number = 1
  roster = []

	speaker_list.each do |speaker|
    full_sentence = "Hello, #{speaker}! You'll be assigned to room #{room_number}!"
    roster << full_sentence
    room_number += 1
  end

  roster
end

def printer(speaker_list)

  badges = batch_badge_creator(speaker_list)
  assignments = assign_rooms(speaker_list)

  badges.each do |item|
    puts item
  end

  assignments.each do |item|
    puts item
  end
end
