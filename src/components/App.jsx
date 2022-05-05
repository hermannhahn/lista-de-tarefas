import React, { useState } from 'react';
import Header from './Header';

import { v4 as uuidv4 } from 'uuid';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Container from '@mui/material/Container';
import * as CONSTANTS from '../constants';
import NoTasks from './NoTasks';

import '../styles/App.css';

const title = document.getElementsByTagName('title')[0];
title.innerHTML = CONSTANTS.PAGE_TITLE;

const App = () => {
	const jsonData = require('../api/database.json');
	const prop = 'id';
	const sortData = new Map(
		[...jsonData.entries()].sort((a, b) => b[1][prop] - a[1][prop])
	);
	const [tasks, setTasks] = useState(jsonData);
	const handleTaskAdd = (taskTitle) => {
		const newTask = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
				showdesc: false,
				description: '',
			},
		];

		setTasks(newTask);
	};

	const handleTaskUpdateDesc = (taskId, taskDesc) => {
		const newTask = tasks.get((task) => {
			if (task.id === taskId) return { ...task, description: taskDesc };
			return task;
		});
		setTasks(newTask);
	};

	const handleTaskStatus = (taskId) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTask);
	};

	const handleTaskRemove = (taskId) => {
		const newTask = tasks.filter((task) => task.id !== taskId);
		setTasks(newTask);
	};

	const closeAllTaskDescriptions = () => {
		const newTask = tasks.map((task) => {
			return (task.showdesc = false);
		});
		setTasks(newTask);
	};

	const handleTaskDescription = (taskId) => {
		const newTask = tasks.map((task) => {
			if (task.id === taskId) return { ...task, showdesc: !task.showdesc };
			return task;
		});
		closeAllTaskDescriptions();
		setTasks(newTask);
	};

	return (
		<>
			<Container maxWidth='sm'>
				<Header />
				<div className='container'>
					<AddTask handleTaskAdd={handleTaskAdd} />
					<div className='tasks'>
						<div className='tasks-title'>Lista de tarefas:</div>
						<NoTasks total={tasks.length} />
						<Tasks
							tasks={tasks}
							handleTaskStatus={handleTaskStatus}
							handleTaskRemove={handleTaskRemove}
							handleTaskUpdateDesc={handleTaskUpdateDesc}
							handleTaskDescription={handleTaskDescription}
						/>
					</div>
				</div>
			</Container>
		</>
	);
};

export default App;
