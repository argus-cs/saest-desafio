import React from 'react'
import cx from 'classnames'

const Jumbotron = (props) => {
  let jumbo = cx({
    "jumbotron": true,
    "jumbotron-fluid": props.fluid
  })
  return(
    <div className={jumbo} >
      {props.children}
    </div>
  )
}

export default Jumbotron