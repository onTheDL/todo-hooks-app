import React from 'react'
import { 
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons'


export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} /> 
      <ListItemText 
        style={{textDecoration: completed ? 'line-through': 'none'}} 
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick={() => removeTodo(id)} >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}