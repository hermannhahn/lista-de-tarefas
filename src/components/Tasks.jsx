import React from 'react';
import Task from './Task';
import NoTasks from './NoTasks';
import '../styles/Tasks.css';

const Tasks = ({
	tasks,
	handleTaskStatus,
	handleTaskRemove,
	handleTaskUpdateDesc,
	handleTaskDescription,
}) => {
	return (
		<>
			<div className='tasks-title'>Lista de tarefas:</div>
			<NoTasks total={tasks.length} />
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleTaskStatus={handleTaskStatus}
					handleTaskRemove={handleTaskRemove}
					handleTaskUpdateDesc={handleTaskUpdateDesc}
					handleTaskDescription={handleTaskDescription}
				/>
			))}
		</>
	);
};

export default Tasks;
