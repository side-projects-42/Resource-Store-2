\#{extends 'main.html' /} \#{form @submit()}

# Map binding: Map&lt;String, String&gt;, taking "composite." as identifier (composite value)

composite.name:  
composite.surname:

composite.phone1:  
composite.phone2:  
composite.phone3:

---

# Map binding: Map&lt;String, String&gt;, taking "items" as identifier (non composite value)

first item:  
second item:  
third item:

---

# Map binding: Map&lt;String, ComplexModel&gt;, taking "models" as identifier

first's name:  
first's surname:  
first's phone1:

second's name:  
second's surname:  
second's phone1:  
\#{/form}
