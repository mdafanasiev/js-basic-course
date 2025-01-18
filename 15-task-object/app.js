"use strict";

const ToDoList = {
    tasks: [],
    compareId: (task, id) => {
        return task.id === id;
    },
    addTask(title, priority) {
        const id =
            this.tasks.reduce((accumulator, currentTask) => {
                if (currentTask.id > accumulator) {
                    accumulator = currentTask.id;
                    return accumulator;
                }
            }, 0) + 1;
        this.tasks.push({
            title,
            id,
            priority,
        });
    },
    removeTask(id) {
        const taskIndex = this.tasks.findIndex((task) =>
            this.compareId(task, id)
        );
        if (taskIndex != -1) this.tasks.splice(taskIndex, 1);
    },

    updateTask(id, newTitle, newPriority) {
        const task = this.tasks.find((task) => this.compareId(task, id));
        if (task) [task.title, task.priority] = [newTitle, newPriority];
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

// Тестирование
const sortConfig1 = {
    method: "ASC",
    field: "id",
};

const sortConfig2 = {
    method: "DESC",
    field: "priority",
};

function addTasks(countOfTasks) {
    for (let i = 1; i <= countOfTasks; i++) {
        ToDoList.addTask(
            `Задача ${i}`,
            Math.floor(Math.random() * countOfTasks + 1)
        );
    }
}

addTasks(4);
ToDoList.removeTask(3);
ToDoList.updateTask(4, "Задача 4 НОВАЯ", 12);
ToDoList.sortTasks(sortConfig2);
ToDoList.printTasks();
