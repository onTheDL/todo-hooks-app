import React, { useContext } from 'react'
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
import {TodosContext} from '../contexts/todos.context'



export default function Todo({ id, task, completed }) {
  const { removeTodo, toggleTodo } = useContext(TodosContext)
  const [isEditing, toggle] = useToggleState(false)

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm id={id}  task={task} toggleEditForm={toggle} /> 
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