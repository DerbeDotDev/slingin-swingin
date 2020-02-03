import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: '20px'
  },
  typography: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3)
    }
  }
}))

function Header({ tag }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h1" className={classes.typography}>
          <Box textAlign="center" fontWeight={500} fontFamily="Monospace">
            #{tag}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

Header.propTypes = {
  tag: PropTypes.string
}

export default Header
