describe "Picking Apples" do
  let(:fruits)   { ["apple", "orange", "apple"] }
  let(:smoothie) { ["carrot", "apple", "pepper", "cucumber", "apple", "apple"] }
  let(:veggies)  { ["pepper", "carrot", "cucumber"] }

  describe "#apple_picker_with_collect" do
    it "picks out the words that are not apple" do
      expect(apple_picker_with_collect(fruits)).to_not include("orange")
      veggies.each do |veg| 
        expect(apple_picker_with_collect(smoothie)).to_not include(veg)
      end
    end

    it "returns an array without nil elements" do
      expect(apple_picker_with_collect(fruits)).to_not include(nil)
      expect(apple_picker_with_collect(smoothie)).to_not include(nil)
    end

    it "returns an array with the same # of elements as 'apples' in the original array" do
      expect(apple_picker_with_collect(fruits).length).to eq(2)
      expect(apple_picker_with_collect(smoothie).length).to eq(3)
    end

    it "returns an array of all the apple strings that are in the original array" do
      expect(apple_picker_with_collect(fruits)).to eq(["apple", "apple"])
      expect(apple_picker_with_collect(smoothie)).to eq(["apple", "apple", "apple"])
    end

    it 'calls on collect' do
      my_fruits = fruits
      result = my_fruits.collect { |item| item if item == "apple" }
      expect(my_fruits).to receive(:collect).and_return(result)
      expect(apple_picker_with_collect(my_fruits)).to eq(["apple", "apple"])
    end    
  end

  describe "#apple_picker_with_select" do
    it "picks out the words that are not apple" do
      expect(apple_picker_with_select(fruits)).to_not include("orange")
      veggies.each do |veg| 
        expect(apple_picker_with_select(smoothie)).to_not include(veg)
      end
    end

    it "returns an array without nil elements" do
      expect(apple_picker_with_select(fruits)).to_not include(nil)
      expect(apple_picker_with_select(smoothie)).to_not include(nil)
    end

    it "returns an array with the same # of elements as 'apples' in the original array" do
      expect(apple_picker_with_select(fruits).length).to eq(2)
      expect(apple_picker_with_select(smoothie).length).to eq(3)
    end

    it "returns an array of all the apple strings that are in the original array" do
      expect(apple_picker_with_select(fruits)).to eq(["apple", "apple"])
      expect(apple_picker_with_select(smoothie)).to eq(["apple", "apple", "apple"])
    end

    it 'calls on select' do
      my_fruits = fruits
      result = my_fruits.select { |item| item == "apple" }
      expect(my_fruits).to receive(:select).and_return(result)
      expect(apple_picker_with_select(my_fruits)).to eq(["apple", "apple"])
    end
  end
end
