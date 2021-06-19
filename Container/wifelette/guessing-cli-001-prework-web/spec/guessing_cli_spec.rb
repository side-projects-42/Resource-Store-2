require_relative 'spec_helper'

describe "Guessing CLI" do

  context 'user inputs' do
    it "responds to 'exit'" do
      expect(self).to receive(:gets).and_return('exit')
      expect { run_guessing_game }.to output(/Goodbye!/).to_stdout
    end

    it "responds to a correct guess" do
      allow(self).to receive(:rand).and_return(2)
      expect(self).to receive(:gets).and_return("2")
      expect(self).to receive(:gets).and_return("exit")
      expect { run_guessing_game }.to output(/You guessed the correct number!/).to_stdout
    end

    it "responds to an incorrect guess" do
      allow(self).to receive(:rand).and_return(5)
      expect(self).to receive(:gets).and_return("2")
      expect(self).to receive(:gets).and_return("exit")
      expect { run_guessing_game }.to output(/The computer guessed 5./).to_stdout
    end
  end

  it 'starts the script with the run_guessing_game method' do
    allow(self).to receive(:gets).and_return('exit')
    expect { run_guessing_game }.to output(/Guess a number between 1 and 6./).to_stdout
  end
end
