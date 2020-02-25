import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from '@utils/isEmpty'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function ProfileDetailsBio({ profile }) {
  return (
    <Typography variant="h5" gutterBottom>
      <Box letterSpacing={1} mb={3} fontWeight={300}>
        {isEmpty(profile.bio) ? 'did not write anything in the bio...' : profile.bio}
      </Box>
    </Typography>
  )
}

ProfileDetailsBio.propTypes = {
  profile: PropTypes.object
}

export default ProfileDetailsBio
