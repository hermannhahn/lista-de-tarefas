import React from 'react';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import App from './components/App';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<DndProvider backend={HTML5Backend}>
		<App />
	</DndProvider>
);
