"use strict";

const ToDoList = {
    tasks: [],
    addTask(taskData) {
        this.sortTasks({ field: "id", method: "DESC" });
        const newTask = {
            ...taskData,
            id: this.tasks.length > 0 ? this.tasks[0].id + 1 : 0,
        };
        this.tasks.unshift(newTask);
    },
    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    },

    updateTask(id, newTaskData) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
            for (const [key, value] of newTaskData) {
                if (task.has) task[key] = value;
            }
        }
    },

    sortTasks(sortConfig) {
        const field = sortConfig.field;
        const method = sortConfig.method;

        this.tasks.sort((task1, task2) =>
            method === "ASC"
                ? task1[field] - task2[field]
                : task2[field] - task1[field]
        );
    },
    printTasks() {
        console.log(this.tasks);
    },
};

const newTaskManager = {
    tasks: [
        {
            id: 1,
            name: "тест",
            description: "описание",
            order: 0,
        },
    ],
};

const expandTaskManager = function () {
    for (const [key, value] of Object.entries(ToDoList)) {
        if (typeof value === "function")
            newTaskManager[key] = value.bind(newTaskManager);
        else newTaskManager[key] = value;
    }
};

expandTaskManager();
newTaskManager.addTask({ name: "тест", description: "описание", order: 0 });
newTaskManager.addTask({ title: "Добавленная задача 2", priority: 3 });
newTaskManager.removeTask(0);
console.dir(newTaskManager);
