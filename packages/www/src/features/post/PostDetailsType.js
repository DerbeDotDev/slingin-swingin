// Packages
import React from 'react'

// Material Core
import { Chip } from '@material-ui/core'

const PostDetailsType = ({ post, classes }) => {
  let color

  // https://materialuicolors.co/ Level 200
  if (post.type === 'Tutorial') {
    color = '#F48FB1' // Pink 200
  } else if (post.type === 'Blogartikel') {
    color = '#B39DDB' // Purple 200
  } else if (post.type === 'Diskussion') {
    color = '#90CAF9' // Blue 200
  } else if (post.type === 'Idee') {
    color = '#80CBC4' // Teal 200
  } else if (post.type === 'Projekt') {
    color = '#A5D6A7' // Green 200
  } else if (post.type === 'Frage') {
    color = '#FFCC80' // Orange 200
  } else if (post.type === 'Fun') {
    color = '#FFE082' // Amber 200
  }

  return (
    <Chip
      variant="outlined"
      label={post.type}
      className={classes.chip}
      style={{ border: `2px solid ${color}` }}
    />
  )
}

export default PostDetailsType
