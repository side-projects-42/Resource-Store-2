def badge_maker(name)
  return "Hello, my name is #{name}."
end

def batch_badge_creator(list)
  for x in list
    puts "Hello, my name is #{name}."
  end
end

def batch_badge_creator(list)
  speaker_list = []
  list.each do |name|
    speaker_list << badge_maker(name)
  end
  speaker_list
end

def assign_rooms(list)
  speaker_rooms = []
  list.each do |name|
    speaker_rooms << "Hello, #{name}! You'll be assigned to room #{list.index(name)+1}!"
  end
  speaker_rooms
end

def printer(ppl)
  batch_badge_creator(ppl).each do |badge|
    puts badge
  end
  assign_rooms(ppl).each do |room|
    puts room
  end
end