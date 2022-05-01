import React from 'react';
import '../styles/Task.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddDone from '@mui/icons-material/Done';

const Task = ({
	task,
	handleTaskStatus,
	handleTaskRemove,
	handleTaskDescription,
}) => {
	let statusButton = '';
	let statusText = '';
	let descClass = '';

	if (!task.completed) {
		statusButton = <AlarmIcon />;
		statusText = 'V';
	} else {
		statusButton = <AddDone />;
		statusText = 'U';
	}

	if (!task.showdesc) {
		descClass = 'hidden';
	} else {
		descClass = 'task-desc';
	}

	return (
		<>
			<li
				className='task-li'
				style={
					task.completed
						? {
								borderTop: '3px solid chartreuse',
								paddingTop: '12px',
						  }
						: task.showdesc
						? {
								borderBottomLeftRadius: '0px',
								borderBottomRightRadius: '0px',
								backgroundColor: 'rgb(205, 227, 255)',
						  }
						: {}
				}
			>
				<div
					className='task-title'
					onClick={() => handleTaskDescription(task.id)}
				>
					{task.title}
				</div>

				<div className='buttons-container'>
					<IconButton
						color='secondary'
						aria-label={statusText}
						onClick={() => handleTaskStatus(task.id)}
					>
						{statusButton}
					</IconButton>
					<IconButton
						aria-label='delete'
						className='remove-task'
						onClick={() => handleTaskRemove(task.id)}
					>
						<DeleteIcon />
					</IconButton>
				</div>
			</li>

			<div className={descClass}>{task.description}</div>
		</>
	);
};

export default Task;
