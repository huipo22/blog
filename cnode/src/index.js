import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { HashRouter } from 'react-router-dom'
import '../node_modules/_antd@3.7.0@antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
