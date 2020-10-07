import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'

import { makeStyles } from '@material-ui/styles'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles({
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 0,

    '&:hover': {
      textDecoration: props => (props.underlined ? 'underlined' : 'none')
    }
  }
})

function Link({ children, color, href, as, variant, underlined }) {
  const classes = useStyles({ underlined })

  if (!variant || variant === 'NextLink') {
    return (
      <NextLink href={href} as={as} passHref>
        <MuiLink className={classes.link} color="textPrimary">
          {children}
        </MuiLink>
      </NextLink>
    )
  } else if (variant === 'MuiLink') {
    return (
      <MuiLink className={classes.link} href={href} color={color} target="_blank">
        {children}
      </MuiLink>
    )
  }
}

Link.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  underlined: PropTypes.bool
}

export default Link