// Packages
import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'

// Services
import { getPosts, getPostsTags } from '../post/_services'
import { getProfiles } from '../profile/_services'

// Contexts
import { useAuth } from '../../contexts/auth'

// Features
import PostFeedItem from '../post/PostFeedItem'

// Components
import CardLanding from '../../components/cards/CardLanding'
import LandingWidgetPostTags from './LandingWidgetPostTags'
import LandingWidgetUsers from './LandingWidgetUsers'

// Material Core
import { Button, Grid, Hidden } from '@material-ui/core'

const Landing = ({ history }) => {
  const { auth } = useAuth()
  const [limit, setLimit] = useState(10)
  const [posts, setPosts] = useState()
  const [postTags, setPostTags] = useState()
  const [profiles, setProfiles] = useState()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    getPosts().then(res => {
      setPosts(res.data)
    })

    getPostsTags().then(res => {
      setPostTags(res.data)
    })

    getProfiles().then(res => {
      setProfiles(res.data)
    })
  }, [])

  const loadMore = () => {
    setLimit(limit + 10)
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={3}
    >
      <Hidden smDown>
        <Grid item xs={3}>
          <LandingWidgetPostTags postTags={postTags} />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        {!auth.isAuthenticated ? <CardLanding /> : null}
        <Grid item xs={12}>
          {posts &&
            posts
              .slice(0, limit)
              .map((post, i) => (
                <PostFeedItem
                  clickLocation={'allPosts'}
                  key={i}
                  post={post}
                  history={history}
                  auth={auth}
                />
              ))}
          {posts && posts.slice(0, limit).length === posts.length ? null : (
            <Button onClick={loadMore} variant="outlined" color="primary">
              Mehr...
            </Button>
          )}
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}>
          <LandingWidgetUsers profiles={profiles} />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Landing
