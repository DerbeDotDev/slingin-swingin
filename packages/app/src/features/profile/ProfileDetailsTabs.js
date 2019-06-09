import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import { Tab, Tabs, Typography, Grid } from '@material-ui/core'

import ProfileDetailsTabsPosts from './ProfileDetailsTabsPosts'
import ProfileDetailsTabsComments from './ProfileDetailsTabsComments'

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  )
}

const useStyles = makeStyles({
  label: {
    color: '#FFF000'
  },
  indicator: {
    backgroundColor: 'green'
  },
  root: {
    flexGrow: 1,
    marginBottom: '20px',
    width: '100%'
  }
})

TabContainer.propTypes = {
  children: PropTypes.object.isRequired,
  dir: PropTypes.object.isRequired
}

const ProfileDetailsTabs = ({ commentsByUserId, postsByUserId, setPostsByUserId }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    <Grid item xs={12}>
      <Tabs
        className={classes.root}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={`Beiträge ${postsByUserId.length}`} />
        <Tab label={`Kommentare ${commentsByUserId.length}`} />
      </Tabs>
      {value === 0 && (
        <TabContainer>
          <ProfileDetailsTabsPosts
            postsByUserId={postsByUserId}
            setPostsByUserId={setPostsByUserId}
          />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <ProfileDetailsTabsComments commentsByUserId={commentsByUserId} />
        </TabContainer>
      )}
    </Grid>
  )
}

ProfileDetailsTabs.propTypes = {
  postsByUserId: PropTypes.array.isRequired,
  setPostsByUserId: PropTypes.func.isRequired,
  commentsByUserId: PropTypes.array.isRequired
}

export default ProfileDetailsTabs
