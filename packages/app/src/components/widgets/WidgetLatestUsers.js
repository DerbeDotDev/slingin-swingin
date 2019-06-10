import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getProfiles } from '../../features//profile/_services'

import Link from '../../components/Link'
import CharAvatar from '../../components/avatars/CharAvatar'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@material-ui/core'

const useStyles = makeStyles({
  avatar: {
    height: '75px',
    width: '75px',
    margin: '10px'
  },
  card: {
    marginBottom: '20px'
  }
})

function LandingWidgetUsers() {
  const classes = useStyles()
  const [profiles, setProfiles] = useState()

  useEffect(() => {
    getProfiles().then(res => {
      setProfiles(res.data)
    })
  })

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          <Box fontFamily="Monospace" fontWeight={900}>
            @neue mitglieder
          </Box>
        </Typography>
        {profiles &&
          profiles.slice(0, 5).map(profile => {
            return (
              <Link key={profile._id} to={`/${profile.handle}`}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Grid item xs>
                    {profile.user.avatar && profile.user.avatar.secure_url ? (
                      <Avatar src={profile.user.avatar.secure_url} className={classes.avatar} />
                    ) : (
                      <CharAvatar
                        size="75px"
                        fontSize="30px"
                        charString={profile.user.username}
                        border="3px"
                      />
                    )}
                  </Grid>
                  <Grid item xs>
                    <Typography variant="inherit" color="textSecondary" component="h3">
                      {profile.user.username}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            )
          })}
      </CardContent>
    </Card>
  )
}

LandingWidgetUsers.propTypes = {
  profiles: PropTypes.array
}

export default LandingWidgetUsers
