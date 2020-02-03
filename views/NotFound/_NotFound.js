import React from 'react'

import Link from '@components/Link'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  image: {
    width: '50%',
    marginBottom: theme.spacing(3)
  },
  container: {
    marginBottom: theme.spacing(5)
  }
}))

function NotFound() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <img src="/404.png" className={classes.image} />
      <Link href="/">
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
    </Grid>
  )
}

export default NotFound
