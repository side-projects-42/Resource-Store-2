%{ System.out.println("in template: page=" + page + ", hotels=" + hotels); }% \#{if hotels}

Name

Address

City, State

Zip

Action

\#{list hotels, as:'hotel'}

${hotel.name}

${hotel.address}

${hotel.city}, ${hotel.state}, ${hotel.country}

${hotel.zip}

[View Hotel](<@%7Bshow(hotel.id)%7D>)

\#{/list}

<a href="$%7Bpage+1%7D" id="nextPage">More results</a>

\#{/if} \#{else}

No more results

\#{/else}
