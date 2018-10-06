import React from 'react'
import cx from 'classnames'

export const GridRow = props => (
  <div className="row">
    {props.children}
  </div>
)

export const GridCol = (props) => {
  let cols = cx({
    [`col-sm-${props.sm}`]: props.sm,
    [`col-md-${props.md}`]: props.md,
    [`col-lg-${props.lg}`]: props.lg,
    [`col-xl-${props.xl}`]: props.xl,
  })
  return (
    <div className={cols}>
      {props.children}
    </div>
  )
}

export const Container = props => (
  <div className="container">
    {props.children}
  </div>
)