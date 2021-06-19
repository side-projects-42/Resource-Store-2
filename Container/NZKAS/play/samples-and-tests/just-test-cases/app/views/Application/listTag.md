\#{extends 'main.html' /}

# a

\#{list items:a, as:'i'} ${i_parity == 'even' ? '=' : '-'} ${i_index}. ${i} ${i_isLast ? '.' : ','}  
\#{/list}

# b

\#{list items:b, as:'i'} ${i_parity == 'even' ? '=' : '-'} ${i_index}. ${i} ${i_isLast ? '.' : ','}  
\#{/list}

# c

\#{list items:0..3, as:'i'} ${i_parity == 'even' ? '=' : '-'} ${i_index}. ${i} ${i_isLast ? '.' : ','}  
\#{/list}

# d

\#{list items:d, as:'i'} ${i_parity == 'even' ? '=' : '-'} ${i_index}. ${i} ${i_isLast ? '.' : ','}  
\#{/list}

# e

\#{list items:1..5} ${\_parity == 'even' ? '=' : '-'} ${\_index}. ${\_} ${\_isLast ? '.' : ','}  
\#{/list}

# f

\#{list} COUCOU \#{/list}

# g

\#{list items:\[\], as:'k'} OOPS \#{/list} \#{else} Nothing to display \#{/else}

# h

\#{list items:\[\], as:'k'} OOPS \#{/list} \#{elseif 1} Yeah \#{/elseif} \#{else} OOPS \#{/else}

# i

\#{list a, as:'i'} ${i_parity == 'even' ? '=' : '-'} ${i_index}. ${i} ${i_isLast ? '.' : ','}  
\#{/list}

# j

\#{list a} ${\_parity == 'even' ? '=' : '-'} ${\_index}. ${\_} ${\_isLast ? '.' : ','}  
\#{/list}

# k

\#{list 1..5} ${\_parity == 'even' ? '=' : '-'} ${\_index}. ${\_} ${\_isLast ? '.' : ','}  
\#{/list}

# l

\#{list items:0..5, as:'a'} ${a_index} \#{list items:0..5, as:'b'}\#{/list} \#{/list}

xxx
