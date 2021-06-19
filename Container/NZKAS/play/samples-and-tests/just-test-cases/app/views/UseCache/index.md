# Try cache

\#{cache 'yop', for:'2s'} ${new java.util.Date()} \#{/cache}

\#{cache 'kiki'} ${new java.util.Date()} \#{/cache}

\#{cache 'p'} \#{render 'Application/a.html' /} \#{/cache}
