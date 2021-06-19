module PerksHelper
  # I ended up nixing many of the uses of this, so now frankly it's not very neccessary. I wouldn't build it as a helper again if I did this again.
  def perk_use_count
    @perk.packages.count
  end

  def status_mark(value)
    value ? "✅" : "❌"
  end
end
