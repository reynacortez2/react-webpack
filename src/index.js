import React from 'react';
import { render } from 'react-dom';
import App from './components/App'

render(
	<div>
		<h3>App</h3>
		<App />
	</div>, 
	document.getElementById('app')
);
