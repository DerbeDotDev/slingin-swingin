import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SearchPostFeed from './SearchPostFeed'
import SearchProfileFeed from './SearchProfileFeed'

import { makeStyles } from '@material-ui/styles'

import { Tab, Tabs, Typography, Grid } from '@material-ui/core'

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.object.isRequired
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
    width: '100%'
  }
})

const CenteredTabs = ({ searchResult, searchString, setSearchResult }) => {
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
        <Tab label={`Beiträge ${searchResult.posts ? searchResult.posts.length : '0'}`} />
        <Tab label={`Mitglieder  ${searchResult.profiles ? searchResult.profiles.length : '0'}`} />
      </Tabs>
      {value === 0 && (
        <TabContainer>
          <SearchPostFeed
            searchResult={searchResult}
            searchString={searchString}
            setSearchResult={setSearchResult}
          />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <SearchProfileFeed searchResult={searchResult} searchString={searchString} />
        </TabContainer>
      )}
    </Grid>
  )
}

CenteredTabs.propTypes = {
  posts: PropTypes.array.isRequired,
  profiles: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired,
  searchResult: PropTypes.array.isRequired,
  setSearchResult: PropTypes.func.isRequired
}

export default CenteredTabs
