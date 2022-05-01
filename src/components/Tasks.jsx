import React from "react";
import Task from "./Task";

import '../styles/Tasks.css';

const Tasks = ({ tasks, handleTaskStatus }) => {
	return (
		<>
			<div className="tasks-title">Lista de tarefas:</div>
			{tasks.map((task) => (
				<Task key={task.id} task={task} handleTaskStatus={handleTaskStatus} />
			))}
		</>
	);
};

export default Tasks;
