import React, { useContext } from 'react'
import { 
  Paper,
  TextField, 
} from '@material-ui/core'
import useInputState from '../hooks/useInputState'
import { DispatchContext } from '../contexts/todos.context'

export default function TodoForm() {
  const dispatch = useContext(DispatchContext)
  const [value, handleChange, reset] = useInputState('')

  return (
    <Paper style={{margin: '1rem 0', paddi: '0 1rem'}}>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch({ type: 'ADD', task: value })
        reset()
      }}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
      
    </Paper>
  )
}