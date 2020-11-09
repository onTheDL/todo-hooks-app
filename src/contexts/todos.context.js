//todos
//all methods to interact with todos
import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
  { id: 1, task: 'Lose beer belly', completed: false,},
  { id: 2, task: 'Buy more beer', completed: true },
]

export const TodosContext = createContext()

export function TodosProvider(props) {
  const TodosStuff = useTodoState(defaultTodos)

  return(
    <TodosContext.Provider value={TodosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}