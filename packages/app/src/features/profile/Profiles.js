import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'

import { getProfiles } from './_services'
import ProfilesCard from './ProfilesCard'

import CardSponsors from '../../components/cards/CardSponsors'
import CardUserLatest from '../../components/cards/CardUserLatest'

import { Grid, Hidden, Button, Typography } from '@material-ui/core'

const Profiles = () => {
  const [limit, setLimit] = useState(10)
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    getProfiles().then(res => setProfiles(res.data))
  }, [])

  const loadMore = () => {
    setLimit(limit + 10)
  }

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
      <Hidden smDown>
        <Grid item xs={3}>
          <CardUserLatest profiles={profiles} />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" style={{ marginBottom: '10px' }}>
          Mitglieder ({profiles && profiles.length})
        </Typography>
        {profiles &&
          profiles.slice(0, limit)(profile => (
            <Grid item xs={12} key={profile._id}>
              <ProfilesCard location={location} profile={profile} />
            </Grid>
          ))}
        {profiles && profiles.slice(0, limit).length === profiles.length ? null : (
          <Button onClick={loadMore} variant="outlined" color="primary">
            Mehr...
          </Button>
        )}
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}>
          <CardSponsors />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Profiles
