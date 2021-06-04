import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo'
import {TodoContext} from './TodoContext'

function TodoList(){
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo,index) => (
            <div key={todo.id}>
              <Todo
                {...todo}
              />
              {index < todos.length -1 && <Divider/>}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null
}

export default TodoList;
