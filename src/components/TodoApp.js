import React, { useState } from 'react'
import {
  Typography, 
  Paper,
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default function TodoApp() {

  const initialTodos = [
    { id: 1, task: 'Learn React Hooks', completed: false, },
    { id: 2, task: 'Learn Data Structures', completed: false, },
    { id: 3, task: 'Learn Redux', completed: true, },
  ]

  const [todos, setTodos] = useState(initialTodos)

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        // width: '100vw',
        backgroundColor: '#fafafa',
      }}
      elevation={0}  
    >
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color='inherit'>
            TODOS WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoForm />
      <TodoList todos={todos} />
    </Paper>

    
  )
}