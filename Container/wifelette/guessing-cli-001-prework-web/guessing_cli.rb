def run_guessing_game
  puts "Guess a number between 1 and 6."
  reply = gets.chomp
  random = rand(1..6).to_i

  if reply.to_i == random
    puts "You guessed the correct number!"
    run_guessing_game
  elsif reply.downcase.strip == "exit"
    puts "Goodbye!"
  else
    puts "The computer guessed #{random}."
    run_guessing_game
  end
end
