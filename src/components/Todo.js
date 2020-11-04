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


export default function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} /> 
      <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}} >{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete'>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}