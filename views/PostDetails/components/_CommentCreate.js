import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Quill from '../../../components/Quill'
import { commentCreate } from '../../../services/comment'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({})

function CommentCreate({ postId, toggleAnswerMode, setComments, comments }) {
  const classes = useStyles()
  const [text, setText] = useState('')

  async function onSubmit(event) {
    try {
      event.preventDefault()

      const commentData = {
        text,
        postId
      }

      const createdComment = await commentCreate(commentData)
      await setComments([...comments, createdComment.data])
      toggleAnswerMode && toggleAnswerMode()
      setText('')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function onTextChange(value) {
    // value instead event.target.value - is quill specified
    setText(value)
  }

  return (
    <Grid className={classes.root} container justify="center">
      <form onSubmit={onSubmit}>
        <div>
          <Quill value={text} onChange={onTextChange} placeholder="Write a comment" />
        </div>
        <Button type="submit" variant="outlined" color="primary" disabled={text.length < 1}>
          Leave a comment
        </Button>
      </form>
    </Grid>
  )
}

CommentCreate.propTypes = {
  postId: PropTypes.string,
  toggleAnswerMode: PropTypes.bool,
  comments: PropTypes.array,
  setComments: PropTypes.func
}

export default CommentCreate
