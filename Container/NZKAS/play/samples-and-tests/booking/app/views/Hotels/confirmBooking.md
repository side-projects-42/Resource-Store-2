\#{extends 'main.html' /} \#{set title:'Confirm ' + hotel.name + ' booking' /}

# Confirm hotel booking

\#{form @confirmBooking(hotel.id)}

**Name:** ${hotel.name}

**Address:** ${hotel.address}

**City:** ${hotel.city}

**State:** ${hotel.state}

**Zip:** ${hotel.zip}

**Country:** ${hotel.country}

**Nightly rate:** ${hotel.price}

**Beds:** ${booking.beds}

**Total:** ${booking.total.formatCurrency('USD')}

**Check in date:** ${booking.checkinDate.format('yyyy-MM-dd')}

**Check out date:** ${booking.checkoutDate.format('yyyy-MM-dd')}

**Credit card \#:** ${booking.creditCard}

[Cancel](<@%7Bshow(hotel.id)%7D>)

\#{/form}
