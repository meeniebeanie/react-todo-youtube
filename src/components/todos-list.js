import _ from 'loadash';
import React from 'react';
import TodoListHeader from './todos-list-header';

export default class TodoList extends React.Component {
  renderItems(){
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
  }

  render(){
    console.log(this.props.todos)
    return (
      <table>
        <TodosListheader />
        <tr>
          {this.renderItems()}
        </tr>
      </table>
    )
  }
}
