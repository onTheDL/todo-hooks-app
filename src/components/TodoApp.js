import React from 'react';
import useTodoState from '../hooks/useTodoState';
import {
  Typography, 
  Paper,
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {

  const initialTodos = [{id: 1, task: 'Learn to play harmonica', completed: false}]

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
  

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
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
            editTodo={editTodo}   
          />
        </Grid>
      </Grid>

      
    </Paper>

    
  )
}