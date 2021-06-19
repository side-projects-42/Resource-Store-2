todos
=====

-   {{ todo.title }}

<span class="todo-count"> **{{ remaining }}** {{ remaining | pluralize }} left </span>

-   <a href="#/all" class="{ selected: visibility == &#39;all&#39; }">All</a>
-   <a href="#/active" class="{ selected: visibility == &#39;active&#39; }">Active</a>
-   <a href="#/completed" class="{ selected: visibility == &#39;completed&#39; }">Completed</a>

Clear completed

Double-click to edit a todo

Written by [Evan You](http://evanyou.me)

Part of [TodoMVC](http://todomvc.com)
