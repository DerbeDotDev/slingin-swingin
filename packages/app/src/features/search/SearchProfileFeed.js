import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Spinner from '../common/Spinner'
import ProfilesFeedItem from '../profile/ProfilesFeedItem'

import { Grid, Button } from '@material-ui/core'

const SearchProfileFeed = ({ searchResult }) => {
  const [limit, setLimit] = useState(10)

  const loadMore = () => {
    setLimit(limit + 10)
  }

  let profileItems

  if (searchResult.profiles === null) {
    profileItems = <Spinner />
  } else {
    const location = 'getProfilesBySearch'
    profileItems = searchResult.profiles
      .slice(0, limit)
      .map(profile => <ProfilesFeedItem location={location} key={profile._id} profile={profile} />)
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        {profileItems}
        {searchResult.profiles && profileItems.length === searchResult.profiles.length ? null : (
          <Button onClick={loadMore} variant="outlined" color="primary">
            Mehr...
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

SearchProfileFeed.propTypes = {
  searchResult: PropTypes.object.isRequired,
  searchString: PropTypes.string.isRequired
}

export default SearchProfileFeed
