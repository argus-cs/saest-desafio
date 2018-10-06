import React from 'react';

const Card = (props) => (
  <div className="card mb-4">
    <div className="card-header">{props.title}</div>
    <div className="card-body">
      {props.children}
    </div>
    {props.footer && 
      <div className="card-footer">
        {props.footer}
      </div>
    }
  </div>
)

export default Card