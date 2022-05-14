import React, { useState } from 'react';

import Container from '@mui/material/Container';
import * as CONSTANTS from '../constants/Constants';

import Header from './Header';
import Tasks from './Tasks';

import '../styles/App.css';

const title = document.getElementsByTagName('title')[0];
title.innerHTML = CONSTANTS.PAGE_TITLE;

const App = () => {
	const pref = localStorage.getItem('pref');
	const savedPref = pref ? JSON.parse(pref) : false;
	const [darkmode, setDarkMode] = useState(savedPref);
	darkmode
		? (document.body.style.backgroundColor = 'black')
		: (document.body.style.backgroundColor = 'whitesmoke');

	const handleMode = () => {
		const data = JSON.stringify(!darkmode);
		localStorage.setItem('pref', data);
		setDarkMode(!darkmode);
	};
	return (
		<>
			<Container maxWidth='sm'>
				<div className='container'>
					<Header darkmode={darkmode} handleMode={handleMode} />
					<Tasks />
				</div>
			</Container>
		</>
	);
};

export default App;
