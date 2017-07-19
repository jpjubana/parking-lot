import React from "react";

export default class Topic extends React.Component {
  render() {
    const {topic, index, onEdit, onDelete} = this.props;

    return (
      <li>
       {topic}
       <button
         value={index}
         onClick={onDelete}
       >
         Delete
       </button>
       <button
         value={index}
         onClick={onEdit}
       >
         Edit
       </button>
     </li>
    );
  }
}
