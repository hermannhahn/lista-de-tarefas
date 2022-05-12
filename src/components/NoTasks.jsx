import React from 'react';
import '../styles/Task.css';

const NoTasks = ({ total }) => {
	if (total < 1) {
		return (
			<div className='no-tasks'>
				Você não possui tarefas. Adicione usando o campo acima.
			</div>
		);
	}
};

export default NoTasks;
