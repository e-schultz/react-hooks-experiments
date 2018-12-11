import { useList } from "./hooks/array-hook";
import { useInput } from "./hooks/input-hook";
// eslint-disable-next-line no-unused-vars
import React from "react";

export function TodoList({ list = [] }) {
  const [state, dispatch, { add, update }, removeBtn] = useList(list);
  
  const { value, reset, bind } = useInput("");
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(add({ title: value, complete: false, id: Date.now() }));
          reset();
        }}
      >
        <input value={value} {...bind} />
      </form>
      <ul>
        {state.map(item => (
          <li key={item.id}>
            {item.title} - ({item.complete.toString()}){" "}
            {removeBtn(item)}
            {/*<button onClick={() => dispatch(remove(item))}>X</button>*/} |{" "}
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
