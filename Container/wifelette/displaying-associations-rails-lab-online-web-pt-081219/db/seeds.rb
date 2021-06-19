puts "Creating 3 Artists..."

@artist1 = Artist.create(name: "Madonna")
@artist2 = Artist.create(name: "Elvis")
@artist3 = Artist.create(name: "The Spice Girls")

puts "Creating 4 Songs..."

@song1 = Song.create(title: "Singasong", artist: @artist1)
@song2 = Song.create(title: "Sadness Etc", artist: @artist1)
@song3 = Song.create(title: "Hip Happiness", artist: @artist2)
@song4 = Song.create(title: "NSFW Outfits", artist: @artist3)

puts "Finished Creating Seed Data!"