import { arrayHook } from "./hooks/array-hook";
import { inputHook } from './hooks/input-hook';
// eslint-disable-next-line no-unused-vars
import React from "react";

export function TodoList({ list = [] }) {
  
  const [state, dispatch] = arrayHook(list);
  const { value, reset, onChange } = inputHook('');
  return (
    <>
    <form onSubmit={event=>{
        event.preventDefault();
        dispatch({type:'add',  payload: { title: value, complete: false, id: Date.now()}});
        reset();
    }}>
    <input value={value} onChange={onChange}></input>
    </form>
    <ul>
      {state.map(item => (
        <li key={item.id}>{item.title} - ({item.complete.toString()}) <button onClick={()=>dispatch({type: 'remove', payload: item})}>X</button> | <button onClick={()=>dispatch({type: 'update', payload: {...item, complete: true}})}>Done</button> </li>
      ))}
    </ul>
    </>
  );
}
