module PackagesHelper
  def in_money(price)
    number_to_currency(price, strip_insignificant_zeros: true)
  end
end
