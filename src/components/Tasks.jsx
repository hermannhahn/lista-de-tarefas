import React from 'react';
import Task from './Task';
import '../styles/Tasks.css';

const Tasks = ({
	tasks,
	handleTaskStatus,
	handleTaskRemove,
	handleTaskUpdateDesc,
	handleTaskDescription,
}) => {
	return tasks.map((task) => (
		<div className='box' key={task.id}>
			<Task
				task={task}
				handleTaskStatus={handleTaskStatus}
				handleTaskRemove={handleTaskRemove}
				handleTaskUpdateDesc={handleTaskUpdateDesc}
				handleTaskDescription={handleTaskDescription}
			/>
		</div>
	));
};

export default Tasks;
