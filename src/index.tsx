import React from 'react';
import ReactDOM from 'react-dom/client';

//Global style
import './styles/index.scss';

//Components
import { App } from 'components/App/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
