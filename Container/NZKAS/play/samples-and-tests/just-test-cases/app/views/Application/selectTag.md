\*{Retro-compatibility}\* \#{select 'booking.beds', value:2, id:'select1'} \#{option 1}One king-size bed\#{/option} \#{option 2}Two double beds\#{/option} \#{option 3}Three beds\#{/option} \#{/select} \*{New select with "automatic" options}\* \#{select 'users', items:users, valueProperty:'name', labelProperty:'name', value:'User-5', class:"test", id:'select2' /} \#{select 'day', items:1..31, value:5, id:'select3' /}

---

\*{Check that the option tag is comparing selected values using toString() method }\* %{ Long longValue = 5; Integer intValue = 5; %} valueProperty is a Long object, value is a Long object: \#{select 'users', items:users, valueProperty:'k', labelProperty:'name', value:longValue, class:"test", id:'select_long_value_long_sel' /}  
valueProperty is a Long object, value is an Integer object: \#{select 'users', items:users, valueProperty:'k', labelProperty:'name', value:intValue, class:"test", id:'select_long_value_int_sel' /}  
valueProperty is an Integer object, value is a Long object: \#{select 'users', items:users, valueProperty:'i', labelProperty:'name', value:longValue, class:"test", id:'select_int_value_long_sel' /}  
valueProperty is an Integer object, value is an Integer object: \#{select 'users', items:users, valueProperty:'i', labelProperty:'name', value:intValue, class:"test", id:'select_int_value_int_sel' /}
