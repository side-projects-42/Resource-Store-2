puts "Making Song 1..."

Song.create(
  title: "Song 1", 
  released: true, 
  release_year: 1982, 
  artist_name: "Singer 1", 
  genre: "Pop"
)

puts "Making Song 2..."

Song.create(
  title: "Song 2", 
  released: false, 
  release_year: 2020, 
  artist_name: "Singer 2", 
  genre: "Rock"
)

puts "Making Song 3..."

Song.create(
  title: "Song 3", 
  released: true, 
  release_year: 2020, 
  artist_name: "Singer 3", 
  genre: "Pop"
)

puts "Finished Creating Seed Data!"