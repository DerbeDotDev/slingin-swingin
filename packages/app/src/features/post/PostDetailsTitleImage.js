import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostDetailsTitleImage({ post }) {
  return (
    <Link to={`/post/${post.shortId}/${post.urlSlug}`}>
      {post.titleImage ? (
        <img
          alt="post-title"
          src={post.titleImage.secure_url}
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px'
          }}
        />
      ) : null}
    </Link>
  )
}

PostDetailsTitleImage.propTypes = {
  post: PropTypes.object
}

export default PostDetailsTitleImage
