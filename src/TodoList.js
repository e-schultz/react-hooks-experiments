import { arrayHook } from "./hooks/array-hook";
import { inputHook } from "./hooks/input-hook";
// eslint-disable-next-line no-unused-vars
import React from "react";

export function TodoList({ list = [] }) {
  const [state, dispatch, { add, remove, update }] = arrayHook(list);
  const { value, reset, onChange } = inputHook("");
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(add({ title: value, complete: false, id: Date.now() }));
          reset();
        }}
      >
        <input value={value} onChange={onChange} />
      </form>
      <ul>
        {state.map(item => (
          <li key={item.id}>
            {item.title} - ({item.complete.toString()}){" "}
            <button onClick={() => dispatch(remove(item))}>X</button> |{" "}
            <button
              onClick={() =>
                dispatch(update({ ...item, complete: !item.complete }))
              }
            >
              Toggle
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
