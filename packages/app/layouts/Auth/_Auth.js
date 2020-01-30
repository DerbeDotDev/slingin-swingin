import React from 'react'
import PropTypes from 'prop-types'

import logo from './_logo.png'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(5, 1, 0) },
  logo: { width: '150px', marginBottom: theme.spacing(5) }
}))

function Auth({ children }) {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container alignItems="center" direction="column">
      <img className={classes.logo} src={logo} />
      {children}
    </Grid>
  )
}

Auth.propTypes = {
  children: PropTypes.node
}

export default Auth
