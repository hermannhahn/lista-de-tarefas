import React, { useState } from 'react';
import Header from './Header';

import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Container from '@mui/material/Container';

import '../styles/App.css';

const App = () => {
	const jsonData = require('../api/database.json');
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
		const newTask = tasks.map((task) => {
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
			<Helmet>
				<title>Lista de Tarefas (React)</title>
				<meta name='keywords' content='HTML,CSS,JavaScript' />
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<meta
					name='description'
					content='Ideas page using react helmet very easy to implement '
				/>
			</Helmet>
			<Container maxWidth='sm'>
				<Header />
				<div className='container'>
					<AddTask handleTaskAdd={handleTaskAdd} />
					<Tasks
						tasks={tasks}
						handleTaskStatus={handleTaskStatus}
						handleTaskRemove={handleTaskRemove}
						handleTaskUpdateDesc={handleTaskUpdateDesc}
						handleTaskDescription={handleTaskDescription}
					/>
				</div>
			</Container>
		</>
	);
};

export default App;
