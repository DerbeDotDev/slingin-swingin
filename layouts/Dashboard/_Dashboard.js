import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from './components/Sidebar'

import Container from '../../components/Container'
import Topbar from '../../components/Topbar'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles({
  root: { display: 'flex' }
})

function Dashboard({ children }) {
  const classes = useStyles()

  return (
    <>
      <Topbar />
      <Grid container>
        <Grid item xs className={classes.root}>
          <CssBaseline />
          <Sidebar />
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node
}

export default Dashboard
