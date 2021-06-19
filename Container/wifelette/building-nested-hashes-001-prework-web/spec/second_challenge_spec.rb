require_relative 'spec_helper'
require_relative '../lib/second_challenge.rb'

describe "#second_challenge" do 
	it "fill out the empty hashes that are the values of the family name keys with the appropriate key/value pairs" do 
    expect(second_challenge[:montague].keys).to eq([:patriarch, :matriarch, :hero, :hero_friends])
    expect(second_challenge[:capulet].keys).to eq([:patriarch, :matriarch, :heroine, :heroine_friends])
    expect(second_challenge[:montague].values).to eq([{}, {}, {}, []])
    expect(second_challenge[:capulet].values).to eq([{}, {}, {}, []])

  end
end