import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // 任务筛选状态

  // 📌 加载本地存储中的任务
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // 📌 保存任务到本地存储
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 📌 添加任务
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  // 📌 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 📌 切换任务完成状态
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 📌 编辑任务
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  // 📌 筛选任务
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>📝 任务管理</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入任务..."
        />
        <button onClick={addTask}>添加</button>
      </div>

      {/* 任务筛选 */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>全部</button>
        <button onClick={() => setFilter("pending")}>未完成</button>
        <button onClick={() => setFilter("completed")}>已完成</button>
      </div>

      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleComplete} onEdit={editTask} />
    </div>
  );
};

export default App;
