// Packages
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateToMarkdown } from 'draft-js-export-markdown'

// Contexts
import { useAlert } from '@contexts/AlertContext'

// Global Components
import DraftJsEditor from '@components/DraftJsEditor'

// Services
import { commentCreate, commentUpdate } from '@services/comment'

// Utils
import rawToHtml from '@utils/rawToHtml'
import htmlRemove from '@utils/htmlRemove'

// MUI
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  commentButton: { marginRight: theme.spacing(1) }
}))

function CommentForm({
  comment,
  postId,
  parentId,
  setComments,
  comments,
  setIsEditMode,
  setCommentData,
  handleIsCommentForm
}) {
  const { setAlert } = useAlert()
  const classes = useStyles()
  const [editorState, setEditorState] = useState(
    comment
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(comment.contentRaw)))
      : EditorState.createEmpty()
  )

  async function onSubmit(event) {
    try {
      event.preventDefault()

      const contentRaw = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
      const contentHtml = stateToHTML(editorState.getCurrentContent())
      const contentText = editorState.getCurrentContent().getPlainText().replace(/\s+/g, ' ').trim()
      const contentMarkdown = JSON.stringify(stateToMarkdown(editorState.getCurrentContent()))

      // create main comment
      if (postId && !parentId && !comment) {
        const commentData = {
          contentRaw,
          contentHtml,
          contentText,
          contentMarkdown,
          postId
        }

        const createdComment = await commentCreate(commentData)
        await setComments([...comments, createdComment.data])
        setAlert({ message: `Comment created successfully.`, variant: 'success' })
      }

      // create child comment
      if (parentId && !comment) {
        const commentData = {
          contentRaw,
          contentHtml,
          contentText,
          contentMarkdown,
          postId,
          parentId
        }

        const createdComment = await commentCreate(commentData)
        await setComments([...comments, createdComment.data])
        setAlert({ message: `Comment created successfully.`, variant: 'success' })
      }

      // update comment
      if (comment && !postId && !parentId) {
        const commentData = {
          contentRaw,
          contentHtml,
          contentText,
          contentMarkdown,
          commentId: comment._id
        }

        setIsEditMode(false)
        const updatedComment = await commentUpdate(commentData)
        setCommentData(updatedComment.data)
        setAlert({ message: `Comment updated successfully.`, variant: 'success' })
      }

      setEditorState(EditorState.createEmpty())
      handleIsCommentForm && handleIsCommentForm()
    } catch (error) {
      console.log(error.response.data) // eslint-disable-line no-console
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Box mb={1}>
        <DraftJsEditor
          editorState={editorState}
          setEditorState={setEditorState}
          placeholder="What are your thougts?"
        />
      </Box>
      <Button
        className={classes.commentButton}
        type="submit"
        variant="contained"
        color="secondary"
        disabled={
          htmlRemove(rawToHtml(JSON.stringify(convertToRaw(editorState.getCurrentContent()))))
            .length < 1
        }
      >
        {comment ? 'Save' : 'Comment'}
      </Button>
      {comment && (
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          onClick={() => setIsEditMode(false)}
        >
          Cancel
        </Button>
      )}
    </form>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.string,
  parentId: PropTypes.string,
  comment: PropTypes.object,
  comments: PropTypes.array,
  setComments: PropTypes.func,
  setIsEditMode: PropTypes.func,
  setCommentData: PropTypes.func,
  handleIsCommentForm: PropTypes.func
}

export default CommentForm
