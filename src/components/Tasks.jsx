import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from './AddTask';
import NoTasks from './NoTasks';

import Task from './Task';
import '../styles/Tasks.css';

const Tasks = () => {
	const json = localStorage.getItem('tasks');
	const savedTasks = json ? JSON.parse(json) : [];
	const [tasks, setTasks] = useState(savedTasks);

	const saveTasks = (newTasks) => {
		setTasks(newTasks);
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
		saveTasks([...tasks, newTask]);
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
			saveTasks(updatedStatus);
		},
		[tasks]
	);

	const deleteTask = useCallback(
		(taskid) => {
			const filteredTasks = tasks.filter((task) => task.id !== taskid);
			saveTasks(filteredTasks);
		},
		[tasks]
	);

	const moveTask = useCallback(
		(dragIndex, hoverIndex) => {
			const newTasks = tasks.slice();
			newTasks.splice(
				hoverIndex < 0 ? newTasks.length + hoverIndex : hoverIndex,
				0,
				newTasks.splice(dragIndex, 1)[0]
			);
			saveTasks(newTasks);
		},
		[tasks]
	);

	const renderTask = useCallback(
		(task, index) => {
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
		[changeStatus, deleteTask, moveTask]
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
