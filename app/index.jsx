var React = require('react');
var ReactDOM = require('react-dom');
var ToDoAll = require('./ToDoAll');


ReactDOM.render(
  <div className="container">
    <ToDoAll />
  </div>,
  document.getElementById('app')
);
