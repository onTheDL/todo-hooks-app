import React, { useState } from 'react'
import {
  Typography, 
  Paper,
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'


export default function TodoApp() {

  const initialTodos = [
    { id: 1, task: 'Learn React Hooks', completed: false, },
    { id: 2, task: 'Learn Data Structures', completed: false, },
    { id: 3, task: 'Learn Redux', completed: true, },
  ]

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos ([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
  }

  const removeTodo = todoId => {
    //filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    //call setTodos with new todos array
    setTodos(updatedTodos)
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed} : todo )

    setTodos(updatedTodos)
  }

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

      <Grid container justify='center' style={{ marginTop: '1rem'}} >
        <Grid item xs={11} md={8} lg={4} >
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>

      
    </Paper>

    
  )
}