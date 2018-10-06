import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './Button.css'

const Button = props => {
  let schema = cx({
    "btn": true,
    [`btn-${props.color}`]: props.color,
    [`btn-outline-${props.outline}`]: props.outline,
    [`btn-${props.size}`]: props.size,
    "btn-block": props.block,
    "active": props.active
  })
  return(
    <button type={props.type} className={schema} disabled={props.disable} {...props} >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.bool,
  active: PropTypes.bool,
  type: PropTypes.string,
  disable: PropTypes.bool,
  children: PropTypes.node,
}

export default Button