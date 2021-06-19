\#{extends 'main.html' /}

${h.id}

\#{list items:h.numbers, as:'n'} ${n}, \#{/list}

\#{list items:h.moreNumbers, as:'n'} ${n}, \#{/list}

\#{list items:h.moreMoreNumbers, as:'n'} ${n}, \#{/list}

\#{list items:h.tags, as:'n'} ${n}, \#{/list}

\#{list items:h.moreTags, as:'n'} ${n}, \#{/list}

${h.notSet?.length}

${h.notSetList?.size()}

\#{if h.address}

# Address

${h.address.id}

${h.address.street}

${h.address.city?.name}

${h.address.number}

${h.address.bikes?.length} bikes

${h.address.dogs?.size()} dogs \#{list items:h.address.dogs, as:'dog'} ${dog}, \#{/list}

\#{/if} \#{list items:h.texts, as:'t'}

${t}

\#{/list} \#{list items:h.justMap, as:'t'}

${t}

\#{/list} \#{list items:h.dogs, as:'dog'} ${dog}, \#{/list}
