import '../styles/AddTask.css';
import Button from '@mui/material/Button';

const AddTask = ({ addTask }) => {
	return (
		<>
			<div className='add-task-container'>
				<form className='add-task-form' onSubmit={addTask}>
					<input
						className='add-task-input'
						type='text'
						name='title'
						placeholder='Adicione uma tarefa...'
					/>
					<div className='add-task-button-container'>
						<Button
							variant='contained'
							className='add-task-button'
							title='Adicionar'
							type='submit'
						>
							+
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddTask;
