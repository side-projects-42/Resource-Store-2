require_relative '../dice_roll'

describe "#roll" do

  it "should return an Integer" do
    expect(roll).to be_a(Integer)
  end

  it "should return a number greater than 0" do
    expect(roll).to be > 0
  end

  it "should return a number less than 7" do
    expect(roll).to be < 7
  end

  it "should return a random value" do
    rolls = []
    100.times do
      rolls << roll
    end
    expect(rolls).to include(1, 2, 3, 4, 5, 6)
    expect(rolls).not_to include(0, 7)
  end

end
