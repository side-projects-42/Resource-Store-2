\#{extends 'main.html' /} \#{set title:hotel.name /}

# View hotel

\#{form @book(hotel.id)}

**Name:** ${hotel.name}

**Address:** ${hotel.address}

**City:** ${hotel.city}

**State:** ${hotel.state}

**Zip:** ${hotel.zip}

**Country:** ${hotel.country}

**Nightly rate:** ${hotel.price}

[Back to search](<@%7Bindex()%7D>)

\#{/form}
