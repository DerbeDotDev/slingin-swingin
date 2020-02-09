import React, { useState, useContext } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import htmlRemove from '@utils/htmlRemove'
import Link from '@components/Link'
import Chip from '@components/Chip'
import AuthContext from '@contexts/AuthContext'
import { postToggleBookmarks } from '@services/post'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const useStyles = makeStyles({
  media: { objectFit: 'cover' }
})

function PostFeedItem({ post }) {
  const classes = useStyles()
  const [postData, setPostData] = useState(post)
  const { isAuthenticated, user } = useContext(AuthContext)

  const isBookmarked = postData.bookmarks.includes(user.id)

  async function handleBookmarkClick() {
    try {
      if (isAuthenticated) {
        const updatedPost = await postToggleBookmarks(post._id)
        setPostData(updatedPost.data)
      } else {
        Router.push('/login')
      }
    } catch (error) {
      if (error) throw error
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Link href="/[handle]" as={`/${postData.user.username}`}>
            {postData.user.avatar && postData.user.avatar.secure_url ? (
              <Avatar alt={postData.user.username} src={postData.user.avatar.secure_url} />
            ) : (
              <Avatar alt={postData.user.username}>
                {postData.user.username.substring(0, 1).toUpperCase()}
              </Avatar>
            )}
          </Link>
        }
        title={
          <Link href="/[handle]" as={`/${postData.user.username}`}>
            {postData.user.username}
          </Link>
        }
        subheader={<Moment fromNow>{postData.dateCreated}</Moment>}
      />
      {postData.titleImage && (
        <Link href="/post/[postId]/[urlSlug]" as={`/post/${postData.shortId}/${postData.urlSlug}`}>
          <CardMedia
            component="img"
            alt="Post title"
            className={classes.media}
            height="140"
            image={postData.titleImage.secure_url}
          />
        </Link>
      )}
      <CardContent>
        <Grid container wrap="nowrap">
          <Grid>
            <Link
              href="/post/[postId]/[urlSlug]"
              as={`/post/${postData.shortId}/${postData.urlSlug}`}
            >
              <Typography variant="h4" component="h2" color="textPrimary" gutterBottom>
                {postData.title}
              </Typography>
              <Typography gutterBottom>
                {htmlRemove(postData.content.substring(0, 250))}{' '}
                {postData.content.length > 250 && '...'}
              </Typography>
            </Link>
            <Grid container>
              {postData.tags.map(tag => {
                return (
                  <Link key={tag} href="/posts/t/[tag]" as={`/posts/t/${tag}`}>
                    <Chip clickable label={tag} variant="outlined" />
                  </Link>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <IconButton onClick={handleBookmarkClick}>
              {isBookmarked ? <BookmarkIcon color="primary" /> : <BookmarkIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">{postData.likes.length} likes</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{postData.postComments.length} replies</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{postData.views} views</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

PostFeedItem.propTypes = {
  post: PropTypes.object
}

export default PostFeedItem
