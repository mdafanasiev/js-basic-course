"use strict";

const ToDoList = {
    tasks: [],
    lastID: 0,
    addTask(taskData) {
        const newTask = {
            ...taskData,
            id: ++this.lastID,
        };
        this.tasks.push(newTask);
    },
    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    },

    updateTask(id, newTaskData) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
            for (const [key, value] of Object.entries(newTaskData)) {
                task[key] = value;
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
    tasks: [],
    lastID: 0,
};

const task1 = { title: "Добавленная задача 1", priority: 5 };
const task2 = { title: "Добавленная задача 2", priority: 2 };
const task3 = { title: "Добавленная задача 3", priority: 4 };
const task4 = { title: "Добавленная задача 4", priority: 8 };

const newManagerAddTask = ToDoList.addTask.bind(newTaskManager);
newManagerAddTask(task1);
ToDoList.addTask.call(newTaskManager, task2);
ToDoList.addTask.apply(newTaskManager, [task3]);
const newManagerAddTask4 = ToDoList.addTask.bind(newTaskManager, task4);
newManagerAddTask4();
ToDoList.removeTask.call(newTaskManager, 3);
ToDoList.updateTask.apply(newTaskManager, [
    4,
    { title: "4 задача", priority: 7 },
]);
const newManagerSort = ToDoList.sortTasks.bind(newTaskManager, {
    field: "priority",
    method: "DESC",
});

newManagerSort();
ToDoList.printTasks.call(newTaskManager);
