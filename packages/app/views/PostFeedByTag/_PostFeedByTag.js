import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Header } from './components'
import { getPostsByTag } from '@services/post'
import PostFeedItem from '@components/PostFeedItem'

import Grid from '@material-ui/core/Grid'

function PostFeedByTag({ tag }) {
  const [posts, setPosts] = useState()

  useEffect(() => {
    getInitialData()
  }, [tag])

  async function getInitialData() {
    try {
      const foundPostsByTag = await getPostsByTag(tag)
      setPosts(foundPostsByTag.data)
    } catch (error) {
      if (error) throw error
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header tag={tag} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {posts &&
            posts.map(post => (
              <Grid key={post._id} item xs={12}>
                <PostFeedItem post={post} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

PostFeedByTag.propTypes = {
  tag: PropTypes.string
}

export default PostFeedByTag
