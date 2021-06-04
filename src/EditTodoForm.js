import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import userInputState from './hooks/inputState';
import {TodoContext} from './TodoContext'

function EditTodoForm({id, task, toggle}){
  const { editTodo } = useContext(TodoContext);
  const [value, handleChange, reset] = userInputState(task);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{marginLeft: '1rem', width: '80%'}}
      >
        <TextField value={value} onChange={handleChange} margin='normal' fullWidth autoFocus/>
    </form>
  );
}

export default EditTodoForm;
