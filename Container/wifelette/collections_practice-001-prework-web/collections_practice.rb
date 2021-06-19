def sort_array_asc(array)
  array.sort
end

def sort_array_desc(array)
  array.sort.reverse
end

def swap_elements(array)
  num2 = array[1]
  num3 = array[2]
  array[1] = num3
  array[2] = num2
  array
end

def reverse_array(array)
  array.reverse
end

def kesha_maker(array)
  array.each do |item|
    item[2] = "$"
  end
end

def find_a(array)
  array.select do |item|
    item.start_with?("a")
  end
end

def sum_array(array)
  sum = 0
  array.each do |number|
    sum = sum + number
  end
  sum
end

# def sum_array(array)
#   array.inject(0) do |sum, item|
#     sum + item
#   end
# end

def add_s(array)
  array.map.with_index do |string, index|
    if index == 1
      string
    else
      "#{string}s"
    end
  end
end