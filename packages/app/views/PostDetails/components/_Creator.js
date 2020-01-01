import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../components'
import { Typography } from '@material-ui/core'

function PostDetailsCreator({ post }) {
  let content = {}

  if (post.user === null) {
    content = <Typography>anonym</Typography>
  } else {
    content = (
      <Link href={`/${post.user.username}`}>
        <Typography color="primary" style={{ display: 'inline' }}>
          {post.user.username}
        </Typography>
      </Link>
    )
  }

  return <React.Fragment>{content}</React.Fragment>
}

PostDetailsCreator.propTypes = {
  post: PropTypes.object
}

export default PostDetailsCreator