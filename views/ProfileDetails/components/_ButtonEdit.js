import React from 'react'
import PropTypes from 'prop-types'
import { NextLink } from '../../../components'
import { Grid, Button } from '@material-ui/core'

function ProfileDetailsButtonEdit({ profile, auth }) {
  return (
    <Grid container>
      {auth.isAuthenticated && profile.user._id === auth.user.id ? (
        <NextLink href="/dashboard/profile">
          <Button size="small" variant="outlined">
            Edit
          </Button>
        </NextLink>
      ) : null}
    </Grid>
  )
}

ProfileDetailsButtonEdit.propTypes = {
  profile: PropTypes.object,
  auth: PropTypes.object
}

export default ProfileDetailsButtonEdit
