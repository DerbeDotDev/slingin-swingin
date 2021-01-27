import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import isEmpty from '@utils/isEmpty'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

const useStyles = makeStyles(theme => ({
  infoIcons: {
    marginRight: theme.spacing(2)
  }
}))

function ProfileDetailsInfos({ user }) {
  const classes = useStyles()

  return (
    <Box mb={2}>
      {isEmpty(user.locationFrom) ? null : (
        <Grid container alignItems="center">
          <LocationCityIcon color="action" className={classes.infoIcons} />
          <Typography variant="body1">From {user.locationFrom.mapBox.place_name}</Typography>
        </Grid>
      )}
      {isEmpty(user.locationCurrent) ? null : (
        <Grid container alignItems="center">
          <LocationOnIcon color="action" className={classes.infoIcons} />
          <Typography variant="body1">
            Currently in {user.locationCurrent.mapBox.place_name}
          </Typography>
        </Grid>
      )}
      <Grid container alignItems="center">
        <PersonAddIcon color="action" className={classes.infoIcons} />
        <Typography variant="body1">
          Joined <Moment fromNow>{user.dateCreated}</Moment>
        </Typography>
      </Grid>
    </Box>
  )
}

ProfileDetailsInfos.propTypes = {
  user: PropTypes.object
}

export default ProfileDetailsInfos
