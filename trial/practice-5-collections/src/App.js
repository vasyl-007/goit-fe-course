import React, { Component } from "react";
import shortid from "shortid";
import TaskEditor from "./components/taskEditor/TaskEditor";
import TaskList from "./components/taskList/TaskList";
import Priority from "../src/utils/Priority";
import TaskFilter from "./components/taskFilter/TaskFilter";

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: "auto",
  marginRight: "auto"
};

export default class App extends Component {
  state = {
    tasks: []
  };
  // state = {
  //   tasks: [
  //     {
  //       id: shortid.generate(),
  //       text:
  //         "At his Shinta Mani Wild resort in Cambodia guests arrive via a 380-meter zipwire over the wilderness of the South Cardamom National Park and are invited to join Wildlife Alliance anti-poaching patrols.",
  //       priority: Priority.LOW,
  //       completed: true
  //     },
  //     {
  //       id: shortid.generate(),
  //       text:
  //         "But he's not doing things simply for the shock factor. Bensley is a lifelong conservationist who deeply cares about what humans are doing to the planet. He's fortunate that his aptitude for design means wealthy and traditional hotel chains want a slice of his unique eco-focused creativity.",
  //       priority: Priority.NORMAL,
  //       completed: false
  //     },
  //     {
  //       id: shortid.generate(),
  //       text:
  //         "Speaking from a cafe in London's five-star Rosewood hotel, 61-year-old Bensley says the first phase of the eight-year WorldWild project, which will consist of several different top branded hotels, is expected to open in 2023.",
  //       priority: Priority.HIGH,
  //       completed: true
  //     },
  //     {
  //       id: shortid.generate(),
  //       text:
  //         "Zoologist James Morrison and Bensley's list of species for WorldWild is based on animals that provide the best conservation value and have the highest need: those currently in roadside zoos or the illegal wildlife trade in China -- with pangolins atop the list.",
  //       priority: Priority.NORMAL,
  //       completed: true
  //     },
  //     {
  //       id: shortid.generate(),
  //       text:
  //         "The scale-covered, house cat-sized nocturnal mammal, sometimes eaten as a delicacy in China and Vietnam and used in traditional medicines, is among the most trafficked animals in the world. The Chinese pangolin, one of eight types, is listed by the International Union for Conservation as critically endangered, one step above being extinct in the wild.",
  //       priority: Priority.HIGH,
  //       completed: false
  //     }
  //   ]
  // };
  render() {
    const { tasks } = this.state;
    return (
      <div style={containerStyles}>
        <TaskEditor />
        <hr />
        <TaskFilter />
        <TaskList items={tasks} />
        <h2>IT WORKS</h2>;
      </div>
    );
  }
}
