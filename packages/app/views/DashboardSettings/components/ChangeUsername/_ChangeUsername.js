// Packages
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux
import { signInReducer } from '@slices/authSlice'

// Services
import { usernameChange } from '@services/auth'

// Components
import TextField from '@components/TextField'

// Contexts
import { useAlert } from '@contexts/AlertContext'

// Mui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'

function UsernameChange() {
  const dispatch = useDispatch()
  const { setAlert } = useAlert()
  const { user } = useSelector(state => state.auth)

  const [errors, setErrors] = useState()
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(user.username)
  }, [user.username])

  function onChange(event) {
    setUsername(event.target.value)
  }

  async function onSubmit(event) {
    try {
      event.preventDefault()

      const emailData = {
        id: user.id,
        username
      }

      const res = await usernameChange(emailData)
      const { token } = res.data

      dispatch(signInReducer(token))
      setAlert({ message: 'Username changed successfully' })
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardHeader subheader="Change your username" />
        <form noValidate onSubmit={onSubmit}>
          <CardContent>
            <TextField
              error={errors && errors.username}
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </CardContent>
          <CardContent>
            <Button variant="contained" color="secondary" type="submit" className="register-button">
              Save
            </Button>
          </CardContent>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default UsernameChange
