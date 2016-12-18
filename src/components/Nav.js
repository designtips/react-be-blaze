import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { positions, states } from '../misc/constants'

const Nav = ({ children, className, fixed, inline, position, ...rest }) => {
  className = classnames(
    className,
    'c-nav', {
      'c-nav--fixed': fixed,
      'c-nav--inline': inline,
      [`c-nav--${position}`]: position
    }
  )

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

Nav.propTypes = {
  brand: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  inline: PropTypes.bool,
  position: PropTypes.oneOf(positions)
}

const NavItem = ({ active, children, className, noClick, link, right, state, ...rest }) => {
  className = classnames(
    className, {
      'c-nav__item': !noClick,
      'c-nav__content': noClick,
      'c-nav__item--active': active,
      'c-nav__item--right': right,
      [`c-nav__item--${state}`]: state
    }
  )

  if (typeof link === 'function') {
    const LinkComponent = link

    return (
      <LinkComponent className={className} {...rest}>
        {children}
      </LinkComponent>
    )
  } else if (link) {
    return (
      <a href={link} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  right: PropTypes.bool,
  state: PropTypes.oneOf(states)
}

export {
  Nav,
  NavItem
}
