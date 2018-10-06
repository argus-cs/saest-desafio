import React from 'react'

import './Box.css'

const Box = props => {
  return(
    <div className="box rounded mb-2">
      {props.children}
    </div>
  )
}

export default Box