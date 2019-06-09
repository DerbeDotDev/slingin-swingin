import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ProfilesFeedItem from '../profile/ProfilesFeedItem'

import { Grid, Button } from '@material-ui/core'

function TabsPostBookmarks({ profilesByFollowerId }) {
  const [limit, setLimit] = useState(10)

  function loadMore() {
    setLimit(limit + 10)
  }

  const content =
    profilesByFollowerId &&
    profilesByFollowerId
      .slice(0, limit)
      .map(profile => <ProfilesFeedItem key={profile._id} profile={profile} />)
  return (
    <Grid>
      {content}
      {profilesByFollowerId && content.length === profilesByFollowerId.length ? null : (
        <Button onClick={loadMore} variant="outlined" color="primary">
          Mehr...
        </Button>
      )}
    </Grid>
  )
}

TabsPostBookmarks.propTypes = {
  profilesByFollowerId: PropTypes.array.isRequired
}

export default TabsPostBookmarks
