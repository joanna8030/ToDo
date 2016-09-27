var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItem = require('./ToDoItem');


var ToDoList = React.createClass({
  CheckComplete: function(id){
    this.props.CheckComplete(id)
  },

  removeNode: function(id){
    this.props.removeNodes(id);
    return;
  },
  render: function(){
    var listNodes = this.props.items.map(function(listNode){
      return (<ToDoItem NodeId={listNode.id} event = {listNode.event} complete={listNode.complete} key = {listNode.id} remove={this.removeNode} CheckComplete={this.CheckComplete}/>);
     },this);
    return (
      <div><ul  className="list-group">{listNodes}</ul></div>
    );
  }
});

module.exports = ToDoList;
