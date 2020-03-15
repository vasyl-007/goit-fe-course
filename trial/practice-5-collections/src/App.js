import React, { Component } from "react";
import shortid from "shortid";
import TaskEditor from "./components/taskEditor/TaskEditor";
import TaskList from "./components/taskList/TaskList";
import Priority from "../src/utils/Priority";
import TaskFilter from "./components/taskFilter/TaskFilter";

const containerStyles = {
  maxWidth: 1200,
  minWidth: 600,
  marginLeft: "auto",
  marginRight: "auto"
};

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  // state = {
  //   tasks: []
  // };
  state = {
    tasks: [],
    // tasks: [
    //   {
    //     id: shortid.generate(),
    //     text:
    //       "At his Shinta Mani Wild resort in Cambodia guests arrive via a 380-meter zipwire over the wilderness of the South Cardamom National Park and are invited to join Wildlife Alliance anti-poaching patrols.",
    //     priority: Priority.LOW,
    //     // priority: "low",
    //     completed: true
    //   },
    //   {
    //     id: shortid.generate(),
    //     text:
    //       "But he's not doing things simply for the shock factor. Bensley is a lifelong conservationist who deeply cares about what humans are doing to the planet. He's fortunate that his aptitude for design means wealthy and traditional hotel chains want a slice of his unique eco-focused creativity.",
    //     priority: Priority.NORMAL,
    //     // priority: "normal",
    //     completed: false
    //   },
    //   {
    //     id: shortid.generate(),
    //     text:
    //       "Speaking from a cafe in London's five-star Rosewood hotel, 61-year-old Bensley says the first phase of the eight-year WorldWild project, which will consist of several different top branded hotels, is expected to open in 2023.",
    //     priority: Priority.HIGH,
    //     // priority: "high",
    //     completed: true
    //   },
    //   {
    //     id: shortid.generate(),
    //     text:
    //       "Zoologist James Morrison and Bensley's list of species for WorldWild is based on animals that provide the best conservation value and have the highest need: those currently in roadside zoos or the illegal wildlife trade in China -- with pangolins atop the list.",
    //     priority: Priority.NORMAL,
    //     // priority: "normal",
    //     completed: true
    //   },
    //   {
    //     id: shortid.generate(),
    //     text:
    //       "The scale-covered, house cat-sized nocturnal mammal, sometimes eaten as a delicacy in China and Vietnam and used in traditional medicines, is among the most trafficked animals in the world. The Chinese pangolin, one of eight types, is listed by the International Union for Conservation as critically endangered, one step above being extinct in the wild.",
    //     priority: Priority.HIGH,
    //     // priority: "high",
    //     completed: false
    //   }
    // ],
    filter: ""
  };

  componentDidMount() {
    console.log("componentDidMount ---------->");

    const persistedTasks = localStorage.getItem("tasks");
    if (persistedTasks) {
      try {
        const tasks = JSON.parse(persistedTasks);
        console.log(tasks);

        this.setState({ tasks: tasks });
      } catch (error) {
        console.log(error);
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState ---------->", prevState);
    console.log("this.state ----------->", this.state);

    if (prevState.tasks !== this.state.tasks) {
      console.log("this.state.tasks ----->", this.state.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      completed: false
      // console.log(task);
    };

    this.setState(state => ({
      tasks: [...state.tasks, taskToAdd]
    }));
  };

  deleteTask = id => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }));
  };

  updateCompleted = id => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, priority: priority } : task
      )
    }));
  };

  render() {
    console.log("render -------------> ");
    const { tasks, filter } = this.state;

    const filteredTasks = filterTasks(tasks, filter);
    console.log("filteredTasks", filteredTasks);
    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={tasks}
          onDeleteTask={this.deleteTask}
          onUpdateComplited={this.updateCompleted}
          onUpdatePriority={this.updatePriority}
        />
      </div>
    );
  }
}
