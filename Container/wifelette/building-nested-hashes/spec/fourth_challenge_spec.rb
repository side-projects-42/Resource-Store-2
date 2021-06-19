require_relative 'spec_helper'
require_relative '../lib/fourth_challenge.rb'

describe "#fourth_challenge" do 
	it "fills out the Montague hero's friends array with" do 
    expect(fourth_challenge[:montague][:hero_friends]).to match_array([{name: "Benvolio", age: "17", attitude: "worried"}, {name: "Steven", age: "30", attitude: "confused"}])
    
  end

  it "fills out the Capulet heroine's friends array with" do 
    expect(fourth_challenge[:capulet][:heroine_friends]).to match_array([{name: "Mercutio", age: "18", attitude: "hot-headed"}, {name: "Nurse", age: "44", attitude: "worried"}])
    
  end
end