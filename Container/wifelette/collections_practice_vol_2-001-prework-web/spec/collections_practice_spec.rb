require 'spec_helper'

describe 'collections practice vol 2.' do

  let(:keys) {
    [
           {
            :first_name => "blake"
        },
           {
            :first_name => "ashley"
        }
    ]
  }

  let(:data) {
    [
           {
             "blake" => {
                :awesomeness => 10,
                     :height => "74",
                  :last_name => "johnson"
            },
            "ashley" => {
                :awesomeness => 9,
                     :height => 60,
                  :last_name => "dubs"
            }
        }
    ]
  }

  let(:merged_data) {
    [
           {
             :first_name => "blake",
            :awesomeness => 10,
                 :height => "74",
              :last_name => "johnson"
        },
           {
             :first_name => "ashley",
            :awesomeness => 9,
                 :height => 60,
              :last_name => "dubs"
        }
    ]
  }

  let(:cool) {
    [
            {
                   :name => "ashley",
            :temperature => "sort of cool"
        },
            {
                   :name => "blake",
            :temperature => "cool"
        }
    ]
  }

  let(:schools) {
    {
      "flatiron school bk" => {
        :location => "NYC"
      },
      "flatiron school" => {
        :location => "NYC"
      },
      "dev boot camp" => {
        :location => "SF"
      },
      "dev boot camp chicago" => {
        :location => "Chicago"
      },
      "general assembly" => {
        :location => "NYC"
      },
      "Hack Reactor" => {
        :location => "SF"
      }
    }
  }
  let(:organized_schools) {
    {"NYC"=>["flatiron school bk", "flatiron school", "general assembly"],
     "SF"=>["dev boot camp", "Hack Reactor"],
     "Chicago"=>["dev boot camp chicago"]}
  }

  describe '#begins_with_r' do
    # Question 1

    it 'Return true if every element of the tools array starts with an "r" and false otherwise.' do
      expect(begins_with_r(["ruby", "rspec", "rails"])).to eq(true)
    end

    it "should return false if there's an element that does not begin with r" do
      expect(begins_with_r(["ruby", "rspec", "sails"])).to eq(false)
    end

  end

  describe '#contain_a' do
    # Question 2

    it "return all elements that contain the letter 'a'" do
      expect(contain_a(["earth", "fire", "wind", "water", "heart"])).to eq(["earth", "water", "heart"])
    end

  end

  describe '#first_wa' do

    # Question 3

    it "Return the first element that begins with the letters 'wa'" do
      expect(first_wa(["candy", :pepper, "wall", :ball, "wacky"])).to eq("wall")
    end

  end

  describe '#remove_non_strings' do
    
    # Hint: Use the method "class"  "blake".class

    # Question 4

    it "remove anything that's not a string from an array" do
      expect(remove_non_strings(["blake", 1, :hello])).to eq(["blake"])
    end

  end

  describe '#count_elements' do

    # Question 5

    it 'count how many times something appears in an array' do
      expect(count_elements([{:name => "blake"}, {:name => "blake"}, {:name => "ashley"}])).to eq([{:name => "blake", :count => 2}, {:name => "ashley", :count => 1}])
    end

  end

  describe '#merge_data' do

    # Question 6

    it 'combines two nested data structures into one' do
      expect(merge_data(keys, data)).to eq(merged_data)
    end

  end

  describe '#find_cool' do

    # Question 7

    it 'find all cool hashes' do
      expect(find_cool(cool)).to eq([{:name => "blake",:temperature => "cool"}])
    end

  end

  describe '#organize_schools' do

    # Question 8

    it 'organizes the schools by location' do
      expect(organize_schools(schools)).to eq(organized_schools)
    end

  end

end