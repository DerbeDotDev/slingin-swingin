import React from 'react'
import PropTypes from 'prop-types'

import Topbar from '@components/Topbar'
import TopbarMixings from '@components/TopbarMixings'

import Footer from './components/Footer'

import Grid from '@material-ui/core/Grid'

function Main({ children }) {
  return (
    <Grid container>
      <Topbar />
      <TopbarMixings />
      {children}
      <Footer />
    </Grid>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
