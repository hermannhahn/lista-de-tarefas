import update from 'immutability-helper';
import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from './AddTask';
import NoTasks from './NoTasks';

import Task from './Task';
import '../styles/Tasks.css';

const Tasks = () => {
	const json = localStorage.getItem('tasks');
	const savedTasks = json ? JSON.parse(json) : [];
	const [tasks, setTasks] = useState(savedTasks);

	const saveTask = (newTasks) => {
		const data = JSON.stringify(newTasks);
		localStorage.setItem('tasks', data);
	};

	const addTask = (e) => {
		e.preventDefault();
		const newTask = {
			id: uuidv4(),
			title: e.target.title.value,
			completed: false,
		};
		setTasks([...tasks, newTask]);
		saveTask([...tasks, newTask]);
		e.target.title.value = '';
	};

	const changeStatus = useCallback(
		(taskid) => {
			const updatedStatus = tasks.map((task) => {
				if (task.id === taskid) {
					return {
						id: task.id,
						title: task.title,
						completed: !task.completed,
					};
				} else {
					return task;
				}
			});
			setTasks(updatedStatus);
			saveTask(updatedStatus);
		},
		[tasks]
	);

	const deleteTask = useCallback(
		(taskid) => {
			const filteredTasks = tasks.filter((task) => task.id !== taskid);
			setTasks(filteredTasks);
			saveTask(filteredTasks);
		},
		[tasks]
	);

	const moveTask = useCallback((dragIndex, hoverIndex) => {
		setTasks((prevTasks) =>
			update(prevTasks, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevTasks[dragIndex]],
				],
			})
		);
	}, []);

	const renderTask = useCallback(
		(task, index) => {
			saveTask(tasks);
			return (
				<Task
					key={task.id}
					index={index}
					id={task.id}
					title={task.title}
					completed={task.completed}
					changeStatus={changeStatus}
					deleteTask={deleteTask}
					moveTask={moveTask}
				/>
			);
		},
		[tasks, changeStatus, deleteTask, moveTask]
	);
	return (
		<>
			<AddTask addTask={addTask} />
			<div className='container'>
				<NoTasks total={tasks.length} />
				{tasks.map((task, i) => renderTask(task, i))}
			</div>
		</>
	);
};
export default Tasks;
