import React, { useContext, memo } from 'react'
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
import {DispatchContext} from '../contexts/todos.context'

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggle] = useToggleState(false)
  console.log('TODO RE-RENDER: ', task)
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm id={id}  task={task} toggleEditForm={toggle} /> 
      : (
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => dispatch({type: 'TOGGLE', id: id})} /> 
          <ListItemText 
            style={{textDecoration: completed ? 'line-through': 'none'}} 
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label='Delete' 
              onClick={() => dispatch({ type:'REMOVE', id: id })} >
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

export default memo(Todo)