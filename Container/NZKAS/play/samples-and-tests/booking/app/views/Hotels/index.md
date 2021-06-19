\#{extends 'main.html' /} \#{set title:'Search' /}

# Search Hotels

Maximum results: 5 10 20

# Current Hotel Bookings

\#{ifnot bookings}

No Bookings Found

\#{/ifnot} \#{else}

Name

Address

City, State

Check in

Check out

Confirmation number

Action

\#{list bookings, as:'booking'}

${booking.hotel.name}

${booking.hotel.address}

${booking.hotel.city}, ${booking.hotel.state}, ${booking.hotel.country}

${booking.checkinDate.format('yyyy-MM-dd')}

${booking.checkoutDate.format('yyyy-MM-dd')}

${booking.id}

\#{a @cancelBooking(booking.id)}Cancel\#{/a}

\#{/list}

\#{/else}
