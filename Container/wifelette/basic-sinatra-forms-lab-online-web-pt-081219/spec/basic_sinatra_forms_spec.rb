describe App do

  describe 'GET /newteam' do
    it 'sends a 200 status code' do
      get '/newteam'
      expect(last_response.status).to eq(200)
    end

    it 'renders basketball team form' do
      visit '/newteam'
      expect(page).to have_selector("form")
      expect(page).to have_field(:name)
      expect(page).to have_field(:coach)
      expect(page).to have_field(:pg)
      expect(page).to have_field(:sg)
      expect(page).to have_field(:sf)
      expect(page).to have_field(:pf)
      expect(page).to have_field(:c)
    end
  end

  describe 'POST /team' do
    it 'does not return Sinatra error page' do
      visit '/newteam'

      click_button "Submit"
      expect(page).to_not have_text("Backtrace")
    end

    it "displays the basketball team name in the browser" do
      visit '/newteam'

      fill_in(:name, :with => "Bballers")
      click_button "Submit"
      expect(page).to have_text("Team Name: Bballers")
    end

    it "displays the coach's name in the browser" do
      visit '/newteam'

      fill_in(:coach, :with => "Walter")
      click_button "Submit"

      expect(page).to have_text("Coach: Walter")
    end

    it "displays the point guard's name in the browser" do
      visit '/newteam'

      fill_in(:pg, :with => "Jeff")
      click_button "Submit"

      expect(page).to have_text("Point Guard: Jeff")
    end

    it "displays the shooting guard's name in the browser" do
      visit '/newteam'

      fill_in(:sg, :with => "Joe")
      click_button "Submit"

      expect(page).to have_text("Shooting Guard: Joe")
    end

    it "displays the small forward's name in the browser" do
      visit '/newteam'

      fill_in(:sf, :with => "Ian")
      click_button "Submit"

      expect(page).to have_text("Small Forward: Ian")
    end

    it "displays the power forward's name in the browser" do
      visit '/newteam'

      fill_in(:pf, :with => "Danny")
      click_button "Submit"

      expect(page).to have_text("Power Forward: Danny")
    end


    it "displays the center's name in the browser" do
      visit '/newteam'

      fill_in(:c, :with => "Avi")
      click_button "Submit"

      expect(page).to have_text("Center: Avi")
    end
  end
end
