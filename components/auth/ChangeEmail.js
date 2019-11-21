import React, { useState, useEffect, useContext } from 'react'

import AuthContext from '../../contexts/AuthContext'
import { useAlert } from '../../contexts/AlertContext'
import { changeEmail } from './_services'

import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  TextField,
  Button
} from '@material-ui/core'

const useStyles = makeStyles({
  formControl: {
    width: '100%'
  },
  card: {
    maxWidth: '400px'
  },
  error: {
    lineHeight: '20px',
    display: 'inline',
    margin: '0'
  },
  passwordButton: {
    fontSize: '10px'
  },
  loginButton: {
    margin: '20px 0'
  },
  divider: {
    marginBottom: '10px'
  }
})

function ChangeEmail() {
  const classes = useStyles()
  const { user, login } = useContext(AuthContext)
  const { setAlert } = useAlert()
  const [errors, setErrors] = useState('')

  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(user.email)
  }, [user.email])

  function onChange(event) {
    setEmail(event.target.value)
  }

  async function onSubmit(event) {
    try {
      event.preventDefault()

      const emailData = {
        id: user.id,
        email
      }

      const res = await changeEmail(emailData)
      const { token } = res.data
      login(token)
      setAlert({ message: 'E-Mail Adresse erfolgreich geändert' })
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">E-Mail ändern</Typography>
          <form noValidate onSubmit={onSubmit}>
            <FormControl className={classes.formControl} error>
              <TextField
                type="email"
                error={errors && errors.email ? true : false}
                placeholder="E-Mail Adress"
                label="E-Mail Adresse"
                margin="normal"
                variant="outlined"
                name="email"
                value={email}
                onChange={onChange}
              />
              {errors && errors.email ? (
                <FormHelperText className={classes.error}>{errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <Button type="submit" variant="outlined" color="primary">
              Speichern
            </Button>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default ChangeEmail
