import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import FavoriteIcon from '@material-ui/icons/Favorite'

function Footer() {
  return (
    <Box width="100%" m={2}>
      <Grid container alignItems="center" justify="center">
        <Typography variant="h6">
          &copy; bounce.dev {new Date().getFullYear()} - made with&nbsp;
        </Typography>
        <FavoriteIcon style={{ color: 'red' }} />
      </Grid>
    </Box>
  )
}

export default Footer
