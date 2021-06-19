// export default function bookApp(
//   state = {
//     authors: [],
//     books: []
//   },
//   action
// ) {
//   let idx;
//   switch (action.type) {
//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: [...state.books, action.book]
//       };

//     case "REMOVE_BOOK":
//       idx = state.books.findIndex(book => book.id === action.id);
//       return {
//         ...state,
//         books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
//       };

//     case "ADD_AUTHOR":
//       return {
//         ...state,
//         authors: [...state.authors, action.author]
//       };

//     case "REMOVE_AUTHOR":
//       idx = state.authors.findIndex(author => author.id === action.id);
//       return {
//         ...state,
//         authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
//       };

//     default:
//       return state;
//   }
// }

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;

function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

    case "REMOVE_BOOK":
      idx = state.findIndex((book) => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex((author) => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BOOK":
      let existingAuthor = state.filter(
        (author) => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    default:
      return state;
  }
}
