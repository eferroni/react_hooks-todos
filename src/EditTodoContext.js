import React, {createContext, useState} from 'react';
import useLocalStorageState from './hooks/useLocalStorageState'

export const EditTodoContext = createContext();

export function EditTodoProvider({children}) {
  const initialTodos = [{id:1, task: 'Task Test', completed: false}];
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
    )
    setTodos(updatedTodos);
  };

  return (
    <EditTodoContext.Provider value={{editTodo}}>
      {children}
    </EditTodoContext.Provider>
  )
}
