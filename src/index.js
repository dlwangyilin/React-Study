import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const title = "Person Management";
ReactDOM.render(<App appTitle={title}/>, document.getElementById('root'));
registerServiceWorker();
