import React from 'react'
import cx from 'classnames'

import './Table.css'

const Table = props => {
  let table = cx({
    "table": true,
    "table-dark": props.dark,
    "table-striped": props.striped,
    "table-bordered": props.bordered,
    "table-borderless": props.borderless,
    "table-hover": props.hover
  })
  let thead = cx({
    [`thead-${props.thead}`]: props.thead
  })
  return(
    <div className="table-responsive">
      <table className={table}>
        <thead className={thead} >
          <tr>
            {props.heads.map(item => (
              <th key={item} scope="col">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.contents.map((items, index) => {
            return(
              <tr key={index}>
                {items.map(item => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table