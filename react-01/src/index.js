import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  React.createElement("h1", null, React.createElement("div", null, "I'm a child")),
  document.getElementById('root')
);
