class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        this.filter = "all";
        this.taskInput = document.getElementById("taskInput");
        this.taskList = document.getElementById("taskList");
        this.taskCount = document.getElementById("taskCount");
        document.getElementById("addTaskBtn").addEventListener("click", () => this.addTask());
        this.render();
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (!taskText) return alert("任务不能为空！");
        
        this.tasks.push({ id: Date.now(), text: taskText, completed: false });
        this.saveAndRender();
        this.taskInput.value = "";
    }

    toggleTask(id) {
        this.tasks = this.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        this.saveAndRender();
    }

    deleteTask(id) {
        if (confirm("确定删除这个任务吗？")) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveAndRender();
        }
    }

    setFilter(filter) {
        this.filter = filter;
        this.render();
    }

    saveAndRender() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.render();
    }

    render() {
        this.taskList.innerHTML = "";
        const filteredTasks = this.tasks.filter(task => {
            if (this.filter === "completed") return task.completed;
            if (this.filter === "pending") return !task.completed;
            return true;
        });

        filteredTasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.className = "task";
            if (task.completed) taskItem.classList.add("completed");

            taskItem.innerHTML = `
                <span>${task.text}</span>
                <div>
                    <button class="btn toggle-btn" onclick="taskManager.toggleTask(${task.id})">
                        ${task.completed ? "未完成" : "完成"}
                    </button>
                    <button class="btn delete-btn" onclick="taskManager.deleteTask(${task.id})">删除</button>
                </div>
            `;

            this.taskList.appendChild(taskItem);
        });

        this.taskCount.textContent = `(${this.tasks.length})`;
    }
}

const taskManager = new TaskManager();
