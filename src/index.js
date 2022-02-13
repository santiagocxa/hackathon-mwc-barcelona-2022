import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import UserState from './context/userState';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
