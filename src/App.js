import React from "react";
import Topic from "./Topic";
import TaskAdder from "./TaskAdder";
import "./index.css";

export default class App extends React.Component {
    constructor(props) {
      super(props);
      // model
      this.state = {
          topics: [
            "import syntax",
            "aysnc/await",
            "virtual dom"
          ],
          currentTopic: "new topic"
      };
    }

    // controller
    updateCurrentTopic = event => {
      this.setState({
        currentTopic: event.target.value
      });
    }

    addTopic = () => {
      const {currentTopic, topics} = this.state;
      this.setState({
        currentTopic: "",
        topics: [
          ...topics,
          currentTopic
        ]
      });
    }

    removeTopic = event => {
      const {topics} = this.state;

      this.setState({
        topics: topics.filter(
          (_, i) => i !== Number(event.target.value)
        )
      });
    }

    editTopic = event => {
      const {topics} = this.state;
      const newTopic = window.prompt(
        "Enter new topic text",
        topics[Number(event.target.value)]
      );

      this.setState({
        topics: topics.map((topic, index) => (
          index === Number(event.target.value) ? newTopic : topic
        ))
      })
    }
    // view
    render() {
      const {topics, currentTopic} = this.state;
      return (
        <div>
          <h1>ParkingLot</h1>
          <TaskAdder
            currentTopic={currentTopic}
            onAdd={this.addTopic}
            onUpdate={this.updateCurrentTopic}
          />
          <ul>
          {topics.map((topic, index) =>
            <Topic
              key={index}
              index={index}
              topic={topic}
              onEdit={this.editTopic}
              onDelete={this.removeTopic}
            />
          )}
          </ul>
        </div>
      );
    }
}
