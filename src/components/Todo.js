import React from 'react'
import EditTodoForm from './EditTodoForm'
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

import useToggleState from '../hooks/useToggleState'



export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

  const [isEditing, toggle] = useToggleState(false)

  return (
    <ListItem>
      {isEditing ? <EditTodoForm id={id} editTodo={editTodo} task={task} toggleEditForm={toggle} /> 
      : (
        <>
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
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
       )
      }
    </ListItem>
  )
}