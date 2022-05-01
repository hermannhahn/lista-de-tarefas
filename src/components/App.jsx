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
			completed: false,
			showdesc: false,
			description: ""
		}];

		setTasks(newTask);
	}

	const handleTaskUpdateDesc = (taskId, taskDesc) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, description: taskDesc }
			return task;
		});
		setTasks(newTask);
	}

	const handleTaskStatus = (taskId) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed }
			return task;
		});
		setTasks(newTask);
	};

	const handleTaskRemove = (taskId) => {
		const newTask = tasks.filter(task => task.id !== taskId);
		setTasks(newTask);
	};

	const closeAllTaskDescriptions = () => {
		const newTask = tasks.map(task => { return task.showdesc = false; });
		setTasks(newTask);
	};


	const handleTaskDescription = (taskId) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, showdesc: !task.showdesc }
			return task;
		});
		closeAllTaskDescriptions();
		setTasks(newTask);
	};

	return (
		<>
			<h2>Lista de Tarefas</h2>
			<div className="container">
				<AddTask handleTaskAdd={handleTaskAdd} />
				<Tasks tasks={tasks} handleTaskStatus={handleTaskStatus} handleTaskRemove={handleTaskRemove} handleTaskUpdateDesc={handleTaskUpdateDesc} handleTaskDescription={handleTaskDescription} />
			</div>
		</>
	);
};

export default App;
