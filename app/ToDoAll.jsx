var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItem = require('./ToDoItem');
var ToDoList = require('./ToDoList');
var ToDoForm = require('./ToDoForm');


var ToDoAll = React.createClass({
  getInitialState: function(){
    return { items:[] };
  },

  handleEvent: function(event){
     var items = this.state.items;
     var id = this.generateId();
     var complete = 'false';
     items = items.concat([{id,event,complete}]);
     this.setState({items});
  },

  generateId: function(){
    return Math.floor(Math.random()*90000);
  },

  removeNodes: function(id){
    var items = this.state.items;
    items = items.filter(function(item){
      return item.id !== id;
    });
    this.setState({items});
    return;
  },

  CheckComplete: function(id){
    var items = this.state.items;
     for (var i in items) {
       if (items[i].id == id) {
         if(items[i].complete==='true'){
           items[i].complete = 'false';
         }else{
           items[i].complete = 'true';
         }
         break;
       }
     }
     this.setState({items});
     return;
  },

 render: function(){
   return (
     <div className="col-md-8">
       <ToDoForm submitEvent={this.handleEvent} />
       <ToDoList items={this.state.items} removeNodes={this.removeNodes} CheckComplete={this.CheckComplete}/>
     </div>
   );
 }
});

module.exports = ToDoAll;
