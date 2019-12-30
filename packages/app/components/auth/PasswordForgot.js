import React, { useState } from 'react'

import { useAlert } from '../../contexts/AlertContext'
import { passwordForgot } from './_services'

import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Grid,
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

function PasswordForgot() {
  const { setAlert } = useAlert()
  const classes = useStyles()

  const [errors, setErrors] = useState('')
  const [email, setEmail] = useState('')

  function onChange(event) {
    setEmail(event.target.value)
  }

  async function onSubmit(event) {
    try {
      event.preventDefault()

      const emailData = {
        email
      }

      await passwordForgot(emailData)
      setAlert({ message: 'E-Mail erfolgreich gesendet' })
      setEmail('')
      setErrors('')
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  return (
    <Grid className={classes.root} container justify="center">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subtitle1">#passwortvergessen</Typography>
          <form onSubmit={onSubmit}>
            <FormControl className={classes.formControl} error>
              <TextField
                type="email"
                error={errors.email ? true : false}
                label="E-Mail"
                margin="normal"
                variant="outlined"
                name="email"
                value={email}
                onChange={onChange}
              />
              {errors.email ? (
                <FormHelperText className={classes.error}>{errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="outlined"
              className={classes.sendMailButton}
            >
              E-Mail senden
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PasswordForgot