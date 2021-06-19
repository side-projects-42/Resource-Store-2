\#{extends 'main.html' /} \#{set title:'Book ' + hotel.name /} \#{set 'moreScripts'}

\#{/set} \#{set 'moreStyles'} \#{/set}

# Book hotel

\#{form @confirmBooking(hotel.id)}

**Name:** ${hotel.name}

**Address:** ${hotel.address}

**City:** ${hotel.city}

**State:** ${hotel.state}

**Zip:** ${hotel.zip}

**Country:** ${hotel.country}

**Nightly rate:** ${hotel.price}

\#{field 'booking.checkinDate'}

**Check In Date:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'booking.checkoutDate'}

**Check Out Date:** \* <span class="error">${field.error}</span>

\#{/field}

**Room preference:** \#{select 'booking.beds', value:booking?.beds} \#{option 1}One king-size bed\#{/option} \#{option 2}Two double beds\#{/option} \#{option 3}Three beds\#{/option} \#{/select}

**Smoking preference:** Smoking Non smoking

\#{field 'booking.creditCard'}

**Credit Card \#:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'booking.creditCardName'}

**Credit Card Name:** \* <span class="error">${field.error}</span>

\#{/field}

**Credit Card Expiry:** \#{select 'booking.creditCardExpiryMonth', value:booking?.creditCardExpiryMonth} \#{option 1}Jan\#{/option} \#{option 2}Feb\#{/option} \#{option 3}Mar\#{/option} \#{option 4}Apr\#{/option} \#{option 5}May\#{/option} \#{option 6}Jun\#{/option} \#{option 7}Jul\#{/option} \#{option 8}Aug\#{/option} \#{option 9}Sep\#{/option} \#{option 10}Oct\#{/option} \#{option 11}Nov\#{/option} \#{option 112}Dec\#{/option} \#{/select} \#{select 'booking.creditCardExpiryYear', value:booking?.creditCardExpiryYear} \#{option 2008}2008\#{/option} \#{option 2009}2009\#{/option} \#{option 2010}2010\#{/option} \#{option 2011}2011\#{/option} \#{option 2012}2012\#{/option} \#{/select}

[Cancel](<@%7Bshow(hotel.id)%7D>)

\#{/form}
