import React from 'react';

import Container from '@mui/material/Container';
import * as CONSTANTS from '../constants/Constants';

import Header from './Header';
import Tasks from './Tasks';

import '../styles/App.css';

const title = document.getElementsByTagName('title')[0];
title.innerHTML = CONSTANTS.PAGE_TITLE;

const App = () => {
	return (
		<>
			<div className='tasks'>
				<Container maxWidth='sm'>
					<Header />
					<Tasks />
				</Container>
			</div>
		</>
	);
};

export default App;
