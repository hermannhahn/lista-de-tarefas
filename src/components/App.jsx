import React, { useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import Tasks from "./Tasks";
import AddTask from "./AddTask";

import "../styles/App.css";


const App = () => {
	const jsonData = require("../api/database.json");
	const [tasks, setTasks] = useState(jsonData);

	const handleTaskAdd = (taskTitle) => {
		const newTask = [...tasks, {
			title: taskTitle,
			id: uuidv4(),
			completed: false
		}];

		setTasks(newTask);
	}

	const handleTaskStatus = (taskId) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed }
			return task;
		});
		setTasks(newTask);
	};

	return (
		<>
			<h2>Lista de Tarefas</h2>
			<div className="container">
				<AddTask handleTaskAdd={handleTaskAdd} />
				<Tasks tasks={tasks} handleTaskStatus={handleTaskStatus} />
			</div>
		</>
	);
};

export default App;
