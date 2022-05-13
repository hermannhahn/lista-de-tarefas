import React, { useState } from 'react';

import Container from '@mui/material/Container';
import * as CONSTANTS from '../constants/Constants';

import Header from './Header';
import Tasks from './Tasks';

const title = document.getElementsByTagName('title')[0];
title.innerHTML = CONSTANTS.PAGE_TITLE;

const App = () => {
	const [darkmode, setDarkMode] = useState(false);
	const handleChange = () => {
		setDarkMode(!darkmode);
		const input = document.getElementById('add-task-input');
		if (!darkmode) {
			document.body.style.backgroundColor = 'black';
			document.getElementById('title').style.color = 'white';
			input.style.color = 'black';
			input.style.backgroundColor = 'white';
		} else {
			document.body.style.backgroundColor = 'white';
			document.getElementById('title').style.color = 'black';
			input.style.color = 'rgb(49, 49, 49)';
			input.style.backgroundColor = 'rgba(224, 224, 224, 0.89)';
		}
	};

	return (
		<>
			<div>
				<Container maxWidth='sm'>
					<Header darkmode={darkmode} handleChange={handleChange} />
					<Tasks />
				</Container>
			</div>
		</>
	);
};

export default App;
