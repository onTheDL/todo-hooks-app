import React from 'react'
import { 
  Paper, 
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'
import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo
              id={todo.id}
              task={todo.task} 
              key={todo.id} 
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </>
        ))}
      </List>
      
    </Paper>
  )
}