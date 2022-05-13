import '../styles/AddTask.css';
import Button from '@mui/material/Button';

const AddTask = ({ addTask }) => {
	const pref = localStorage.getItem('pref');
	const darkmode = pref ? JSON.parse(pref) : false;

	return (
		<>
			<div className='add-task-container'>
				<form className='add-task-form' onSubmit={addTask}>
					<input
						id='add-task-input'
						className='add-task-input'
						type='text'
						name='title'
						placeholder='Adicione uma tarefa...'
						style={
							darkmode
								? { backgroundColor: 'whitesmoke' }
								: { backgroundColor: '#e0e0e0e3' }
						}
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
