import React from 'react'
import cx from 'classnames'

import './ButtonIcon.css'

const ButtonIcon = props => {
  let schema = cx({
    "btn": true,
    "btn-round": true,
    [`btn-outline-${props.outline}`]: props.outline,
    "active": props.active,
    "mx-1": true
  })
  return(
    <button className={schema} {...props} >
      {props.children}
    </button>
  )
}

export default ButtonIcon