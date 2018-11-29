import { useReducer } from "react";

export const arrayHook = (initialValue = []) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
      let newState = [...state, ...[action.payload]];
      debugger;
        return newState;
      case "remove":
        return state.filter(n => n.id !== action.payload.id);
      case "update":
        return state.map(n => {
          return n.id !== action.payload.id ? n : { ...n, ...action.payload };
        });
      default:
        return state;
    }
  };
  const [arrayState, arrayDispatch] = useReducer(reducer, initialValue);
  return [ arrayState, arrayDispatch ];
  
};
