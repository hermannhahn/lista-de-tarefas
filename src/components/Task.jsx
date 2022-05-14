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
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveTask(dragIndex, hoverIndex);
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
	const opacity = isDragging ? 0 : 1;
	const cursor = isDragging ? 'grabbing' : 'grab';
	const titleWidth = () => {
		const taskdiv = document.getElementsByClassName('task-div');
		if (taskdiv[0] && taskdiv[0].offsetWidth) {
			if (taskdiv[0].offsetWidth >= 500) {
				return 42;
			}
			if (taskdiv[0].offsetWidth > 300 && taskdiv[0].offsetWidth < 500) {
				return 23;
			}
		}
		return 15;
	};

	const rTitle = () => {
		const shortTitle = title.slice(0, titleWidth());
		if (title.length > titleWidth()) {
			return shortTitle + ' ...';
		} else {
			return title;
		}
	};

	return (
		<>
			<div
				className={completed ? 'task-div-completed' : 'task-div'}
				type='TASK'
				id={id}
				title={title}
				ref={ref}
				draggable={true}
				data-handler-id={handlerId}
				style={{ opacity, cursor }}
			>
				<div id='task-title' className='task-title'>
					{rTitle()}
				</div>

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
