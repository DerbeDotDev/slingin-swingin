import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import Link from '@components/Link'

import { makeStyles } from '@material-ui/styles'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  card: { marginBottom: '20px' },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(1.5)
  }
}))

function CommentFeedItemHeader({ comment }) {
  const classes = useStyles()

  return (
    <CardHeader
      avatar={
        comment.user.avatar ? (
          <Link href="/[handle]" as={`/${comment.user.username}`}>
            <Avatar
              src={comment.user.avatar ? comment.user.avatar.secure_url : null}
              aria-label="Recipe"
              className={classes.avatar}
            />
          </Link>
        ) : (
          <Link href="/[handle]" as={`/${comment.user.username}`}>
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {comment.user.username.substring(0, 1)}
            </Avatar>
          </Link>
        )
      }
      title={
        <Link href="/[handle]" as={`/${comment.user.username}`}>
          {comment.user.username}
        </Link>
      }
      subheader={<Moment fromNow>{comment.dateCreated}</Moment>}
    />
  )
}

CommentFeedItemHeader.propTypes = {
  comment: PropTypes.object
}

export default CommentFeedItemHeader
