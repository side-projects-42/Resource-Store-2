CodeMirror: Theme demo
======================

function findSequence(goal) { function find(start, history) { if (start == goal) return history; else if (start &gt; goal) return null; else return find(start + 5, "(" + history + " + 5)") || find(start \* 3, "(" + history + " \* 3)"); } return find(1, "1"); }

Select a theme: default ambiance blackboard cobalt eclipse elegant erlang-dark lesser-dark midnight monokai neat night rubyblue solarized dark solarized light twilight vibrant-ink xq-dark xq-light
