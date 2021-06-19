require_relative 'spec_helper'
require_relative '../lib/third_challenge.rb'

describe "#third_challenge" do 
	it "fills out the Montague character roles keys with the key/value pairs describing their attributes" do 
    expect(third_challenge[:montague][:patriarch].keys).to eq([:name, :age])
    expect(third_challenge[:montague][:matriarch].keys).to eq([:name, :age])
    expect(third_challenge[:montague][:hero].keys).to eq([:name, :age, :status])
    expect(third_challenge[:montague][:patriarch].values).to eq(["Lord Montague", "53"])
    expect(third_challenge[:montague][:matriarch].values).to eq(["Lady Montague", "54"])
    expect(third_challenge[:montague][:hero].values).to eq(["Romeo", "15", "alive"])
  end

  it "fills out the Capulet character rolls keys with the key/value pairs describing their attributes" do 
    expect(third_challenge[:capulet][:patriarch].keys).to eq([:name, :age])
    expect(third_challenge[:capulet][:matriarch].keys).to eq([:name, :age])
    expect(third_challenge[:capulet][:heroine].keys).to eq([:name, :age, :status])
    expect(third_challenge[:capulet][:patriarch].values).to eq(["Lord Capulet", "50"])
    expect(third_challenge[:capulet][:matriarch].values).to eq(["Lady Capulet", "51"])
    expect(third_challenge[:capulet][:heroine].values).to eq(["Juliette", "15", "alive"])
  end
end