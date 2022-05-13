import React from 'react';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';

import App from './components/App';

import './styles/index.css';

const deviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return TouchBackend;
	} else if (
		/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			ua
		)
	) {
		return TouchBackend;
	}
	return HTML5Backend;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<DndProvider backend={deviceType()}>
		<App />
	</DndProvider>
);
