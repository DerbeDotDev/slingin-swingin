import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from '@utils/isEmpty'

import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  socialsContainer: {
    margin: '10px 0'
  },
  socialsIcons: {
    margin: '5px'
  }
})

function ProfileDetailsSocials({ profile }) {
  const classes = useStyles()

  const checkForHttp = string => {
    if (string.includes('http')) {
      return string
    } else {
      return `http://${string}`
    }
  }

  return (
    <Grid container className={classes.socialsContainer}>
      {isEmpty(profile.website) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.website)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-globe fa-lg" />
        </a>
      )}
      {isEmpty(profile.social && profile.social.twitter) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.social.twitter)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-lg" />
        </a>
      )}
      {isEmpty(profile.social && profile.social.facebook) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.social.facebook)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-lg" />
        </a>
      )}
      {isEmpty(profile.social && profile.social.linkedin) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.social.linkedin)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg" />
        </a>
      )}
      {isEmpty(profile.social && profile.social.youtube) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.social.youtube)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-lg" />
        </a>
      )}
      {isEmpty(profile.social && profile.social.instagram) ? null : (
        <a
          className={classes.socialsIcons}
          href={checkForHttp(profile.social.instagram)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-lg" />
        </a>
      )}
      {isEmpty(profile.github && profile.github) ? null : (
        <a
          className={classes.socialsIcons}
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg" />
        </a>
      )}
      {isEmpty(profile.gitlab && profile.gitlab) ? null : (
        <a
          className={classes.socialsIcons}
          href={`https://gitlab.com/${profile.gitlab}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab fa-lg" />
        </a>
      )}
      {isEmpty(profile.bitbucket && profile.bitbucket) ? null : (
        <a
          className={classes.socialsIcons}
          href={`https://bitbucket.org/${profile.bitbucket}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-bitbucket fa-lg" />
        </a>
      )}
    </Grid>
  )
}

ProfileDetailsSocials.propTypes = {
  profile: PropTypes.object
}

export default ProfileDetailsSocials
