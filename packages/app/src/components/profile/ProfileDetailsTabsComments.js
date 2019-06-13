import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../../components/Link'
import Moment from 'react-moment'
import 'moment/locale/de'
import { Card, CardContent, Button, Typography, Grid } from '@material-ui/core'

function ProfileDetailsTabsComments({ commentsByUserId }) {
  const [limit, setLimit] = useState(10)

  function loadMore() {
    setLimit(limit + 10)
  }

  const commentsItem = commentsByUserId.slice(0, limit).map(comment => {
    const { shortId, urlSlug } = comment.refPost

    return (
      <Card key={comment._id} style={{ marginBottom: '20px' }}>
        <CardContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}
          >
            <div>
              <Link to={`post/${shortId}/${urlSlug}`}>
                <Typography variant="h6">{comment.refPost.title}</Typography>
              </Link>
              <Typography variant="caption" style={{ fontWeight: '300' }}>
                <Moment fromNow locale="de">
                  {comment.dateCreated}
                </Moment>
              </Typography>
            </div>
          </div>

          <Typography dangerouslySetInnerHTML={{ __html: comment.text }} className="post-content" />
        </CardContent>
      </Card>
    )
  })

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        {commentsItem}
        {commentsByUserId && commentsItem.length === commentsByUserId.length ? null : (
          <Button onClick={loadMore} variant="outlined" color="primary">
            Mehr...
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

ProfileDetailsTabsComments.propTypes = {
  commentsByUserId: PropTypes.array
}

export default ProfileDetailsTabsComments