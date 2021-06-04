import React from 'react';
import useTodoState from './hooks/useTodoState'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import {TodoProvider} from './TodoContext'

function TodoApp(){
  // const initialTodos = [{id:1, task: 'Task Test', completed: false}];
  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

  return (
    <Paper style={{padding:0, margin:0, height: '100vh', backgroundColor: '#fafafa'}} elevation={0}>
      <AppBar color='primary' position='static' style={{height:'63px'}}>
        <Toolbar>
          <Typography color='inherit'>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop:'1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoProvider>
            <TodoForm/>
            <TodoList/>
          </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;
