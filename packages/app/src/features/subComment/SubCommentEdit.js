// Packages
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import MarkdownEditor from '../common/MarkdownEditor'

// Material Core
import { Grid, Button } from '@material-ui/core'

function SubCommentEdit({ subComment, onSaveClick }) {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(subComment.text)
  }, [])

  function onChange(e) {
    setText(e.target.value)
  }

  return (
    <form>
      <MarkdownEditor withPreview text={text} setText={setText} onChange={onChange} value={text} />

      <Grid container direction="row" justify="space-between" alignItems="center">
        <Button onClick={() => onSaveClick(text)} variant="outlined" color="primary">
          Speichern
        </Button>
      </Grid>
    </form>
  )
}

SubCommentEdit.propTypes = {
  subComment: PropTypes.string,
  onSaveClick: PropTypes.func
}

export default SubCommentEdit
