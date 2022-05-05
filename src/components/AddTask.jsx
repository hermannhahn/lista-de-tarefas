import React, { useState } from 'react';

import '../styles/AddTask.css';
import Button from '@mui/material/Button';

const AddTask = ({ handleTaskAdd }) => {
	const [inputData, setInputData] = useState('');

	const getInputOnChange = (e) => {
		setInputData(e.target.value);
	};

	const handleAddTask = () => {
		handleTaskAdd(inputData);
		setInputData('');
	};

	return (
		<>
			<div className='add-task-title'>Adicione uma tarefa:</div>
			<div className='add-task-container'>
				<input
					onChange={getInputOnChange}
					label='add-task-input'
					className='add-task-input'
					type='text'
					value={inputData}
					placeholder='Digite uma tarefa...'
				/>
				<div className='add-task-button-container'>
					<Button
						variant='contained'
						onClick={handleAddTask}
						className='add-task-button'
						label='add-task-input'
						title='Adicionar'
					>
						+
					</Button>
				</div>
			</div>
		</>
	);
};

export default AddTask;
