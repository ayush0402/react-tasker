import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

function App() {
  let [tasks, setTasks] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    return res.data;
  };

  // Fetch Task by ID
  const fetchTask = async (id) => {
    const res = await axios.get(`http://localhost:5000/tasks/${id}`);
    return res.data;
  };

  // Add Tasks
  const addTask = async (task) => {
    const newTask = { id: uuid(), ...task };

    await axios.post("http://localhost:5000/tasks", newTask);
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);

    setTasks(
      tasks.filter((task) => {
        return !(task.id === id);
      })
    );
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const task = await fetchTask(id);
    const updatedTask = { ...task, reminder: !task.reminder };
    const res = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      updatedTask
    );

    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.reminder = res.data.reminder;
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
