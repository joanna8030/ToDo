var React = require('react');
var ReactDOM = require('react-dom');


var ToDoItem = React.createClass({
  ok: function(e){
    e.preventDefault();
    this.props.CheckComplete(this.props.NodeId);
    return;
  },
  remove: function(e){
    e.preventDefault();
    this.props.remove(this.props.NodeId);
    return;
  },
  render: function(){
    var classname = 'list-group-item';
    if(this.props.complete === 'true'){
      classname = classname + ' list-group-item-success';
    }
    return (
      <li className={classname}>{this.props.event}
      <div className="pull-right" role="group">
        <button onClick={this.ok}>完成</button>
        <button onClick={this.remove}>刪除</button>
      </div>
      </li>
    );
  }
});

module.exports = ToDoItem;
