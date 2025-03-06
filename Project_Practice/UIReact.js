import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">任务管理器</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="输入新任务"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          添加
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <span>总任务数: {tasks.length}</span>
        <div>
          <button
            className={`px-3 py-1 mx-1 rounded ${filter === "all" ? "bg-gray-300" : "bg-gray-100"}`}
            onClick={() => setFilter("all")}
          >
            全部
          </button>
          <button
            className={`px-3 py-1 mx-1 rounded ${filter === "completed" ? "bg-green-300" : "bg-gray-100"}`}
            onClick={() => setFilter("completed")}
          >
            已完成
          </button>
          <button
            className={`px-3 py-1 mx-1 rounded ${filter === "pending" ? "bg-red-300" : "bg-gray-100"}`}
            onClick={() => setFilter("pending")}
          >
            未完成
          </button>
        </div>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 border mb-2 rounded flex justify-between items-center ${task.completed ? "bg-green-100" : "bg-white"}`}
          >
            <span
              className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              className="text-red-500 text-sm px-2"
              onClick={() => deleteTask(task.id)}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
