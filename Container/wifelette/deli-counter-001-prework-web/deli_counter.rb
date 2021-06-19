def line(line)
  if line.empty?
    puts "The line is currently empty."
  else
    string = ""
    line.each_with_index do |person, index|
      string << " #{index + 1}. #{person}"
    end
    puts "The line is currently:#{string}"
  end
end

def take_a_number(line, name)
  puts "Welcome, #{name}. You are number #{line.length + 1} in line."
  line.push(name)
end

def now_serving(line)
  if line.empty?
    puts "There is nobody waiting to be served!"
  else
    person = line.shift
    puts "Currently serving #{person}."
  end
end