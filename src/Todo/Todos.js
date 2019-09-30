import React from 'react';

const List = (props) => {
  debugger
  return (<div>
    <li key={props.id}>
      <input className="checkbox" type="checkbox" checked={props.checked} onChange={() => { }} />
      <span>{props.children}</span>
    </li>
  </div>)
}

export default List;
