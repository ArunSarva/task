import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const List = (props) => {

  return (<div>
    <li key={props.id}>
      <input className="checkbox" type="checkbox" checked={props.checked} onChange={props.todoComplete} />
      <span className={props.checked ? 'done' : 'hidden'}>{props.children}</span>
      <button className="DeleteButton" onClick={props.onDeleteHandle.bind(props.id)}><MdDeleteForever /></button>
    </li>
  </div>)
}

export default List;
