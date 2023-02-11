import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
  let initialTasks = [
    {
      id: 1,
      title: "Doctor's Appointment",
      date: "10th Feb, 2023",
      reminder: true,
    },
    {
      id: 2,
      title: "College Fest",
      date: "18th Feb, 2023",
      reminder: false,
    },
    {
      id: 3,
      title: "Mid-Semester exams",
      date: "21th Feb, 2023",
      reminder: true,
    },
  ];

  let [tasks, setTasks] = useState(initialTasks);
  let [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    // let tempTasks = tasks;
    // tempTasks.push({ id: 10, ...task });
    // setTasks(tempTasks);

    const newTask = { id: 10, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return !(task.id === id);
      })
    );
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.reminder = !task.reminder;
        return task;
      })
    );
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header
        title="Task Tracker"
        toggleForm={toggleForm}
        showForm={showForm}
      />
      {showForm ? <AddForm onAdd={addTask} /> : ""}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
