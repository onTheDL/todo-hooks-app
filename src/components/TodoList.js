import React from 'react'
import { 
  Paper, 
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
      
    </Paper>
  )
}