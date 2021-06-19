require_relative 'spec_helper'
require_relative '../lib/first_challenge.rb'

describe "#first_challenge" do 
	it "sets a variable, epic_tragedy, equal to hash with keys of family names and values of empty hashes" do 
    expect(first_challenge.keys).to eq([:montague, :capulet])
    expect(first_challenge.values).to eq([{}, {}])
  end
end