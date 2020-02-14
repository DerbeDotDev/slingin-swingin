import React from 'react'
import PropTypes from 'prop-types'

import markdownToHtml from '@utils/markdownToHtml'
import htmlRemove from '@utils/htmlRemove'

import Link from '@components/Link'
import Chip from '@components/Chip'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function Content({ post }) {
  return (
    <Grid container>
      <Link href="/post/[postId]/[urlSlug]" as={`/post/${post.shortId}/${post.urlSlug}`}>
        <Typography gutterBottom color="textPrimary" variant="h4" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {htmlRemove(markdownToHtml(post.content)).substring(0, 150)}
          {post.content.length > 250 && '...'}
        </Typography>
      </Link>
      <Grid container>
        {post.tags.map(tag => {
          return (
            <Link key={tag} href="/posts/t/[tag]" as={`/posts/t/${tag}`}>
              <Chip clickable label={tag} variant="outlined" />
            </Link>
          )
        })}
      </Grid>
    </Grid>
  )
}

Content.propTypes = {
  post: PropTypes.object
}

export default Content