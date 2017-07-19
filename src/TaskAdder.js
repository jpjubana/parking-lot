import React from "react";

export default class TaskAdder extends React.Component {
    render() {
      const {onAdd, onUpdate, currentTopic} = this.props;

      return (
        <div>
          <input
            autoFocus
            placeholder="New Topic"
            onChange={onUpdate}
            value={currentTopic}
          />
          <button onClick={onAdd}>Add</button>
        </div>
      );
    }
}
