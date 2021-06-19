%{ nbPages = \_size.page(\_caller.pageSize) }% \#{if nbPages &gt; 1}

\*{ Previous }\* \#{if \_page == 1} **« Previous** \#{/if} \#{else} [« Previous]($%7Brequest.path%7D?page=$%7B_page-1%7D) \#{/else} \*{ Pages }\* %{ for (i in 1..nbPages) { }% \#{if \_page == i} **${i}** \#{/if} \#{else} [${i}]($%7Brequest.path%7D?page=$%7Bi%7D) \#{/else} %{ } }% \*{ Next }\* \#{if \_page == nbPages} **Next »** \#{/if} \#{else} [Next »]($%7Brequest.path%7D?page=$%7B_page+1%7D) \#{/else}

\#{/if}
