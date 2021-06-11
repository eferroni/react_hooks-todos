import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './hooks/useLocalStorageState';
import TodoReducer from './reducers/TodoReducer';
import useLocalStorageReducer from './hooks/useLocalStorageReducer'

const initialTodos = [{id:1, task: 'Task Test', completed: false}];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider({children}) {
  const [todos, dispatch] = useLocalStorageReducer('todos', initialTodos, TodoReducer);

  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
