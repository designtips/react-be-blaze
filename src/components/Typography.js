import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Paragraph = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-paragraph'
  )

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Link = ({ children, className, state, ...rest }) => {
  className = classnames(
    className,
    'c-link', {
      [`c-link--${state}`]: state
    }
  )

  return (
    <a className={className} {...rest}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  state: PropTypes.oneOf(states)
}

const Highlight = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-text--highlight'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Highlight.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Loud = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-text--loud'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Loud.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Quiet = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-text--quiet'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Quiet.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Abbr = ({ children, className, title, ...rest }) => {
  className = classnames(
    className,
    'c-text--help'
  )

  return (
    <abbr className={className} title={title} {...rest}>
      {children}
    </abbr>
  )
}

Abbr.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

const Mono = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-text--mono'
  )

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  )
}

Mono.propTypes = {
  className: PropTypes.string
}

const Kbd = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-kbd'
  )

  return (
    <kbd className={className} {...rest}>
      {children}
    </kbd>
  )
}

Kbd.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Code = ({ children, className, multiline, ...rest }) => {
  className = classnames(
    className,
    'c-code', {
      'c-code--multiline': multiline
    }
  )

  return (
    <code className={className} {...rest}>
      {children}
    </code>
  )
}

Code.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  multiline: PropTypes.bool
}

const Blockquote = ({ children, className, from, state, ...rest }) => {
  className = classnames(
    className,
    'c-blockquote', {
      [`c-blockquote--${state}`]: state
    }
  )

  return (
    <blockquote className={className} {...rest}>
      <div className='c-blockquote__body'>
        {children}
      </div>
      <footer className='c-blockquote__footer'>
        — {from}
      </footer>
    </blockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  from: PropTypes.string.isRequired,
  state: PropTypes.oneOf(states)
}

export {
  Abbr,
  Paragraph,
  Blockquote,
  Code,
  Highlight,
  Kbd,
  Link,
  Loud,
  Mono,
  Quiet
}
