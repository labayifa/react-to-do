import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// Components
import TodoContainer from "./functionBased/components/TodoContainer";

import "./functionBased/App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


// const element = <element>Hello from react app</element>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <TodoContainer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
