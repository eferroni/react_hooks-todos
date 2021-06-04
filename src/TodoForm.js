import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import userInputState from './hooks/inputState';
import {TodoContext} from './TodoContext'

function TodoForm(){
  const { addTodo } = useContext(TodoContext);
  const [value, handleChange, reset] = userInputState('');

  return (
    <Paper style={{margin:'1rem 0', padding:'1rem'}}>
      <form onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}>
        <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
      </form>
    </Paper>
  );
}

export default TodoForm;
