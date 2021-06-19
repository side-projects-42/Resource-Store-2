describe "holiday_supplies_hash" do
# Hash of seasons, the holidays in them, and some items each holiday might have.
  let(:holiday_supplies) {
    {
      :winter => {
        :christmas => ["Lights", "Wreath"],
        :new_years => ["Party Hats"]
      },
      :summer => {
        :fourth_of_july => ["Fireworks", "BBQ"]
      },
      :fall => {
        :thanksgiving => ["Turkey"]
      },
      :spring => {
        :memorial_day => ["BBQ"]
      }
    }
  }

 # Question 1
 # Write a method that returns the second supply for the Fourth of July
  describe "#second_supply_for_fourth_of_july" do
    it "returns the string 'BBQ' without hardcoding it" do
      expect(second_supply_for_fourth_of_july(holiday_supplies)).to eq("BBQ")
    end
  end

  # Question 2
  # Write a method that adds a supply to all Winter holidays
  describe "#add_supply_to_winter_holidays" do
    it "iterates through winter holidays adds a supply to each one" do
      add_supply_to_winter_holidays(holiday_supplies, "Balloons")
      expect(holiday_supplies[:winter][:christmas]).to include("Balloons")
      expect(holiday_supplies[:winter][:new_years]).to include("Balloons")
    end
  end

  # Question 3
  # Write a method that adds a supply to Memorial Day
  describe "#add_supply_to_memorial_day" do
    let(:memorial_day_supplies) { holiday_supplies[:spring][:memorial_day] }

    it "adds a supply to memorial day" do
      add_supply_to_memorial_day(holiday_supplies, "Grill")
      expect(memorial_day_supplies).to include("Grill")
    end

    it "adds a supply to memorial day" do
      add_supply_to_memorial_day(holiday_supplies, "Table Cloth")
      expect(memorial_day_supplies).to include("Table Cloth")
    end
  end

  # Question 4
  # Write a method that adds a new holiday and its associated supplies to any season
  describe "#add_new_holiday_with_supplies" do
    it "modifies the original hash by adding supplies of a new holiday to a season" do 
      columbus_day_supplies = ["Flags", "Parade Floats", "Italian Food"]

      add_new_holiday_with_supplies(holiday_supplies, :fall, :columbus_day, columbus_day_supplies)

      expect(holiday_supplies[:fall].keys).to include(:columbus_day)
      expect(holiday_supplies[:fall][:columbus_day]).to match_array(columbus_day_supplies)

      valentines_day_supplies = ["Cupid Cut-Out", "Candy Hearts"]
      add_new_holiday_with_supplies(holiday_supplies, :winter, :valentines_day, valentines_day_supplies)

      expect(holiday_supplies[:winter].keys).to include(:valentines_day)
      expect(holiday_supplies[:winter][:valentines_day]).to match_array(valentines_day_supplies)
    end
  
  end

  # Question 5
  # Write a method to collect all Winter supplies from all the winter holidays
  describe "#all_winter_holiday_supplies" do
    it "has all the winter supplies" do
      ["Lights", "Wreath", "Party Hats"].each do |supply|
        expect(all_winter_holiday_supplies(holiday_supplies)).to include(supply)
      end
    end
  end

  # Question 6
  # Write a method that uses a loop to list out all the supplies you have for each holiday and the season
  describe "#all_supplies_in_holidays" do

    # There are two ways we might go about outputting a big block of text. One way
    # is to iterate through everything we want output, and puts it line by line. Another
    # way is to build a large string, and puts it all at once. How you choose to do it
    # is entirely up to you, and depends on what you think works best in any given
    # situation.

    before do

    # This funny looking <<-TEXT thing is called heredoc. It's a multi-line string
    # delimiter that makes it really easy for us to write multi-line strings in the middle
    # of code. The TEXT part is arbitrary too. It could easily have been <<-BLAHBLAH. The only
    # requirement is that you use the same word to end the multi-line string.

    # For more info about heredocs, see this link: http://en.wikibooks.org/wiki/Ruby_Programming/Here_documents

      @output = <<-TEXT
Winter:
  Christmas: Lights, Wreath
  New Years: Party Hats
Summer:
  Fourth Of July: Fireworks, BBQ
Fall:
  Thanksgiving: Turkey
Spring:
  Memorial Day: BBQ
TEXT
    end

    # For the purposes of this test, we are assuming that you decided to output your list
    # of holiday supplies line by line. If, on the other hand, you decided to output it
    # as one big chunk, comment out this test, and uncomment the one below it.

    it "should output the formatted list of holidays and their supplies" do
      @output.each_line do |line|
        expect($stdout).to receive(:puts).with(line.chomp)
      end

      all_supplies_in_holidays(holiday_supplies)
    end

    # it "should output the formatted list of holidays and their supplies" do
    #   expect($stdout).to receive(:puts).with(@output)
    #   all_supplies_in_holidays(holiday_supplies)
    # end

  end

  # Question 7
  # Write a method to collect all holidays with BBQ
  describe "#all_holidays_with_bbq" do
    it "should return :fourth_of_july and :memorial_day" do
      expect(all_holidays_with_bbq(holiday_supplies)).to eq([:fourth_of_july, :memorial_day])
    end
  end
end
