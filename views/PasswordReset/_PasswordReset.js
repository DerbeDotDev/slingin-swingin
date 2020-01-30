import React, { useState } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import jwtDecode from 'jwt-decode'

import { useAlert } from '../../contexts/AlertContext'
import { passwordReset } from '../../services/auth'

import { makeStyles } from '@material-ui/styles'
import {
  Grid,
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

function PasswordReset({ token }) {
  const { setAlert } = useAlert()

  const classes = useStyles()
  const [errors, setErrors] = useState('')

  const [passwords, setPasswords] = useState({
    password: '',
    password2: ''
  })

  function onChange(event) {
    setPasswords({
      ...passwords,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event) {
    try {
      event.preventDefault()
      const decode = jwtDecode(token)

      const passwordData = {
        id: decode.id,
        password: passwords.password,
        password2: passwords.password2
      }
      await passwordReset(passwordData)
      setAlert({ message: 'Email sent successfully' })
      Router.push('/login')
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return (
    <Grid className={classes.root} container justify="center">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subtitle1">#passwortzuruecksetzen</Typography>
          <form onSubmit={onSubmit}>
            <FormControl className={classes.formControl} error>
              <TextField
                type="password"
                error={errors.password ? true : false}
                label="Password"
                margin="normal"
                variant="outlined"
                name="password"
                value={passwords.password}
                onChange={onChange}
              />
              {errors.password ? (
                <FormHelperText className={classes.error}>{errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl className={classes.formControl} error>
              <TextField
                type="password"
                error={errors.password ? true : false}
                label="Passwort wiederholen"
                margin="normal"
                variant="outlined"
                name="password2"
                value={passwords.password2}
                onChange={onChange}
              />
              {errors.password2 ? (
                <FormHelperText className={classes.error}>{errors.password2}</FormHelperText>
              ) : null}
            </FormControl>
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="outlined"
              className={classes.loginButton}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

PasswordReset.propTypes = {
  token: PropTypes.string
}

export default PasswordReset