class Anagram
  attr_accessor :word

  def initialize(word)
    @word = word
    @word_letters = @word.chars.sort
  end

  def match(array_of_words)
    array_of_words.select do |dictionary_word|
      @word_letters == dictionary_word.chars.sort
    end
  end
end
