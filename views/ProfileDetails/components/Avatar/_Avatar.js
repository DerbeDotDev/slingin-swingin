import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  avatar: {
    width: '100%',
    height: 'auto',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0',
      marginBottom: '20px'
    }
  }
}))

function ProfileDetailsAvatar({ profile }) {
  const classes = useStyles()

  return (
    <>
      {profile.user.avatar && profile.user.avatar.secure_url ? (
        <Avatar
          alt={profile.user.username}
          src={profile.user.avatar.secure_url}
          className={classes.avatar}
        />
      ) : (
        <Avatar alt={profile.user.username} className={classes.avatar}>
          {profile.user.username.substring(0, 1).toUpperCase()}
        </Avatar>
      )}
    </>
  )
}

ProfileDetailsAvatar.propTypes = {
  profile: PropTypes.object
}

export default ProfileDetailsAvatar
