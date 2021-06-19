def apple_picker_with_select(fruit_list)
  fruit_list.select do |item|
    item == "apple"
  end
  
end

def apple_picker_with_collect(fruit_list)
  fruit_list.collect do |item|
    if item == "apple"
      item
    end
  end.compact
end
