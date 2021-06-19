def sort_array_asc(array)
	array.sort
end

def sort_array_desc(array)
	array.sort { |x,y| y <=> x }
end

def sort_array_char_count(array)
	array.sort { |x,y| x.length <=> y.length }
end

def swap_elements(array)
	# second_element = array[1]
	# third_element = array[2]
	#
	# array[2] = second_element
	# array[1] = third_element
  # array

	#mass assignment
	array[0], array[1], array[2] = array[0], array[2], array[1]
end

def reverse_array(array)
	array.reverse
end

def kesha_maker(array)
	array.each do |item|
		item[2] = "$"
	end
  array
end

def find_a(array)
	array.select { |item| item.start_with?("a") }
end

def sum_array(array)
	array.sum
end

def add_s(array)
	array.collect.with_index do |item, index|
		if index != 1
			item + "s"
		else
			item
		end
	end
end
