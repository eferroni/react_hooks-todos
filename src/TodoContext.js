import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './hooks/useLocalStorageState'

export const TodoContext = createContext();

export function TodoProvider({children}) {
  const initialTodos = [{id:1, task: 'Task Test', completed: false}];
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    )
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
    )
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
      {children}
    </TodoContext.Provider>
  )
}
