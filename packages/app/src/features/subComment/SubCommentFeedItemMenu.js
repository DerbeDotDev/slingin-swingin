// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Material Core
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'

// Material Icons
import { Edit, Delete } from '@material-ui/icons'

function SubCommentFeedItemMenu({
  subComment,
  onEditClick,
  onDeleteClick,
  handleMenuClose,
  anchorEl
}) {
  function onMenuEditClick() {
    handleMenuClose()
    onEditClick()
  }

  function onMenuDeleteClick(commentId) {
    handleMenuClose()
    onDeleteClick(commentId)
  }

  return (
    <Menu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      getContentAnchorEl={null}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={onMenuEditClick}>
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        <ListItemText primary="Bearbeiten" />
      </MenuItem>
      <MenuItem onClick={() => onMenuDeleteClick(subComment._id)}>
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        <ListItemText primary="Löschen" />
      </MenuItem>
    </Menu>
  )
}

SubCommentFeedItemMenu.propTypes = {
  subComment: PropTypes.object.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object.isRequired
}

export default SubCommentFeedItemMenu