describe 'songs', type: :feature do
  before do
    Artist.destroy_all
    Song.destroy_all
    @artist = Artist.create!(name: 'Daft Punk')
    @song = @artist.songs.create!(title: 'The Grid')
  end

  it "index page lists songs in 'Artist Name - Song Title' format" do
    visit songs_path
    expect(page.status_code).to eq(200)
    expect(page).to have_link('Daft Punk - The Grid', href: song_path(@song))
  end

  it "show page links to the artist show page" do
    visit song_path(@song)
    expect(page.status_code).to eq(200)
    expect(page).to have_link('Daft Punk', href: artist_path(@artist))
  end
end
