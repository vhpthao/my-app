import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import F7 Bundle
import Framework7 from 'framework7/lite-bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();