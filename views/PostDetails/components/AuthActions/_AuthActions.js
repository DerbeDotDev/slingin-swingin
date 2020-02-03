import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import Link from '@components/Link'
import { postDelete } from '@services/post'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

function PostDetailsAuthActions({ post, user, isAuthenticated }) {
  async function onDeleteClick(id) {
    try {
      if (
        window.confirm('Are you sure you want to delete this post? This action can not be undone!')
      ) {
        await postDelete(id)
        Router.push('/')
      }
    } catch (error) {
      if (error) throw error
    }
  }

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <span>
          {(post.user && post.user._id === user.id) || (user.roles && user.roles.isAdmin) ? (
            <React.Fragment>
              <Divider />
              <CardActions>
                <React.Fragment>
                  <Link href={`/post-edit/${post._id}`}>
                    <Button color="primary">Edit</Button>
                  </Link>
                  <Button onClick={onDeleteClick.bind(this, post._id)} color="primary">
                    Delete
                  </Button>
                </React.Fragment>
              </CardActions>
            </React.Fragment>
          ) : null}
        </span>
      ) : null}
    </React.Fragment>
  )
}

PostDetailsAuthActions.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
}

export default PostDetailsAuthActions
