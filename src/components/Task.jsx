import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes.js';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddDone from '@mui/icons-material/Done';
import '../styles/Task.css';

const Task = ({
	index,
	id,
	title,
	completed,
	changeStatus,
	deleteTask,
	moveTask,
}) => {
	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.TASK,
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveTask(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.TASK,
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));
	const opacity = isDragging ? 0.5 : 1;
	return (
		<>
			<div
				className={completed ? 'task-div-completed' : 'task-div'}
				type='TASK'
				id={id}
				ref={ref}
				data-handler-id={handlerId}
				style={{ opacity }}
			>
				<div className='task-title'>{title}</div>

				<div className='buttons-container'>
					<IconButton
						color={completed ? 'success' : 'primary'}
						title={completed ? 'Restaurar' : 'Finalizar'}
						onClick={() => changeStatus(id)}
					>
						<AddDone />
					</IconButton>
					<IconButton title='Apagar' onClick={() => deleteTask(id)}>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</>
	);
};

export default Task;
