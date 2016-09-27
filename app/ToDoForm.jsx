var React = require('react');
var ReactDOM = require('react-dom');


var ToDoForm = React.createClass({
  getInitialState: function(){
    return {items: []};
  },
  AddToList:function(e){
    e.preventDefault();
    var event = this.refs.event.value;
    this.props.submitEvent(event);
    this.refs.event.value='';
    return {};
  },
  render: function(){
    return (
      <form  onSubmit={this.AddToList}>
        <label htmlFor="input" className="col-md-1">Event:</label>
        <div className="col-md-5">
          <input className="form-control" id="input" type="text" placeholder="what you want to do" ref="event" />
        </div>
        <input type="submit" className="btn btn-primary" onClick={this.AddToList} value="add" />
      </form>
    );
  }
});

module.exports = ToDoForm;
