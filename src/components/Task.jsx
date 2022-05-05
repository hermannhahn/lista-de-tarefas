import React from 'react';
import '../styles/Task.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddDone from '@mui/icons-material/Done';
import DragAndDrop from './DragAndDrop';

const Task = ({
	task,
	handleTaskStatus,
	handleTaskRemove,
	handleTaskDescription,
}) => {
	return (
		<div>
			<DragAndDrop>
				<div
					className='task-div'
					type='TASK'
					draggable='true'
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
							color={task.completed ? 'success' : 'primary'}
							title={task.completed ? 'Restaurar' : 'Completar'}
							onClick={() => handleTaskStatus(task.id)}
						>
							<AddDone />
						</IconButton>
						<IconButton
							title='Apagar'
							className='remove-task'
							onClick={() => handleTaskRemove(task.id)}
						>
							<DeleteIcon />
						</IconButton>
					</div>
				</div>
				<div className={task.showdesc ? 'task-description' : 'hidden'}>
					{task.description}
				</div>
			</DragAndDrop>
		</div>
	);
};

export default Task;
