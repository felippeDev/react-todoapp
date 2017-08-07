import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './TodoApp';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<TodoApp />, document.getElementById('container'));

registerServiceWorker();
