import React, { useReducer } from "react";

const actionCreators = (...actions) =>
  actions.reduce(
    (acc, n) => ({
      ...acc,
      [n]: payload => ({ type: n, payload })
    }),
    {}
  );

export const arrayHook = (initialValue = [], id = "id") => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        let newState = [...state, ...[action.payload]];
        return newState;
      case "remove":
        return state.filter(n => n[id] !== action.payload[id]);
      case "update":
        return state.map(n => {
          return n[id] !== action.payload[id] ? n : { ...n, ...action.payload };
        });
      default:
        return state;
    }
  };
  const [arrayState, arrayDispatch] = useReducer(reducer, initialValue);
  const { add, remove, update } = actionCreators("add", "remove", "update");
  return [
    arrayState,
    arrayDispatch,
    { add, remove, update },
    item => <button onClick={() => arrayDispatch(remove(item))}>Remove</button>
  ];
};
