puts "Making Materials..."

puts "Adding Activity 1"

@activity1 = Activity.create!(
  name: "Chalk", 
  category: "Solo",
)

puts "Adding Activity 2"

@activity2 = Activity.create!(
  name: "Bubbles", 
  category: "Chaperoned"
)

puts "Adding Activity 3"

@activity3 = Activity.create!(
  name: "Screen Time", 
  category: "Solo"
)

puts "Adding Activity 4"

@activity4 = Activity.create!(
  name: "Reading", 
  category: "Solo"
)

@material1 = Material.create!(name: "Soap")
@material2 = Material.create!(name: "Chalk")
@material3 = Material.create!(name: "Play Dough")
@material4 = Material.create!(name: "Paper")
@material5 = Material.create!(name: "Crayons")
@material6 = Material.create!(name: "Markers")
@material7 = Material.create!(name: "Device")
@material8 = Material.create!(name: "Water")
@material9 = Material.create!(name: "Bubble Wand(s)")
@material10 = Material.create!(name: "Books")

puts "Updating Activities..."

# ActivityMaterial.create!(activity: @activity1, material: @material2)
# ActivityMaterial.create!(activity: @activity2, material: @material1)
# ActivityMaterial.create!(activity: @activity2, material: @material)


@activity1.materials = [@material2]
@activity2.materials = [@material1, @material9]

puts "Creating Days..."

days = {}

(1..5).each do |day|
days[day] = Day.create!(date: "2020-04-0#{day}")
end

ScheduleItem.create!(day: days[1], activity: @activity2)
ScheduleItem.create!(day: days[1], activity: @activity1)
ScheduleItem.create!(day: days[2], activity: @activity3)
ScheduleItem.create!(day: days[3], activity: @activity1)
ScheduleItem.create!(day: days[4], activity: @activity4)
ScheduleItem.create!(day: days[4], activity: @activity1)
ScheduleItem.create!(day: days[5], activity: @activity2)

puts "Finished Creating Seed Data!"