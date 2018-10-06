import React from 'react'
import cx  from 'classnames'

const Input = props => {
  let group = cx({
    "form-group": true,
  })
  let size = cx({
    "form-control": true,
    [`form-control-${props.size}`]: props.size,
    "is-invalid": props.error
  })
  return(
    <div className={group}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} 
        id={props.id} 
        className={`${size}`}
        value={props.value}
        placeholder={props.placeholder}
        {...props} />
      {props.error && <div className="invalid-feedback">{props.errorMessage}</div>}
    </div>
  )
}

export const InputRadioCheck = props => {
  let group = cx({
    "form-check": props.type === 'checkbox' || props.type === 'radio',
    "form-check-inline": true
  })
  let input = cx({
    "form-check-input": props.type === 'checkbox' || props.type === 'radio'
  })
  let label = cx({
    "form-check-label": props.type === 'checkbox' || props.type === 'radio'
  })
  return(
    <div className={group}>
      <input type={props.type} 
        id={props.id} 
        className={input} 
        placeholder={props.placeholder}
        {...props} />
      <label htmlFor={props.id} className={label} >{props.label}</label>
    </div>
  )
}

export const InputStatic = props => {
  return(
    <div className="form-group row">
      <label htmlFor={props.id} className="col-sm-2 col-form-label">{props.label}</label>
      <div className="col-sm-10">
        <input type={props.type} readOnly className="form-control-plaintext" 
          id={props.id} value={props.value} />
      </div>
    </div>
  )
}

export default Input