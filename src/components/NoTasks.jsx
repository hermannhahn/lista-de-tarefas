import React from 'react';
import '../styles/Task.css';

const NoTasks = ({ total }) => {
	if (total < 1) {
		return (
			<li className='task-li'>
				Você não possui tarefas. Adicione usando o campo acima.
			</li>
		);
	}
};

export default NoTasks;
