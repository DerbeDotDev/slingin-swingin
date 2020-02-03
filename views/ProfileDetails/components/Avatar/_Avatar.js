import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from '@utils/isEmpty'

import { makeStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  avatar: {
    border: `3px solid ${grey[500]}`,
    width: '150px',
    height: '150px',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0',
      marginBottom: '20px'
    }
  }
}))

function ProfileDetailsAvatar({ rgbaColor, profile }) {
  const classes = useStyles()

  return (
    <>
      {profile.user.avatar && profile.user.avatar.secure_url ? (
        <Avatar
          style={{
            border: !isEmpty(profile.color) ? `3px ${rgbaColor} solid` : null
          }}
          alt={profile.user.username}
          src={profile.user.avatar.secure_url}
          className={classes.avatar}
        />
      ) : (
        <Avatar
          style={{
            border: !isEmpty(profile.color) ? `3px ${rgbaColor} solid` : null
          }}
          alt={profile.user.username}
          className={classes.avatar}
        >
          {profile.user.username.substring(0, 1).toUpperCase()}
        </Avatar>
      )}
    </>
  )
}

ProfileDetailsAvatar.propTypes = {
  rgbaColor: PropTypes.string,
  profile: PropTypes.object
}

export default ProfileDetailsAvatar
