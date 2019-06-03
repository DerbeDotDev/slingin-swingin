// Packages
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import avatarPlaceholder from '../../assets/img/avatar-placeholder.png'

// Utils
import isEmpty from '../../utils/isEmpty'

// Material Styles
import { makeStyles } from '@material-ui/styles'

// Material Core
import { Avatar } from '@material-ui/core'

const useStyles = makeStyles({
  avatar: {
    marginRight: '10px'
  }
})

const CommentFeedItemAvatar = ({ comment }) => {
  const classes = useStyles()

  return (
    <Link to={`/${comment.user.username}`}>
      <Avatar
        className={classes.avatar}
        src={
          isEmpty(comment.user.avatar)
            ? avatarPlaceholder
            : comment.user.avatar.secure_url
        }
      />
    </Link>
  )
}

export default CommentFeedItemAvatar
