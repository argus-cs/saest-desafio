import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/saest_logo.png'

import './Master.css'

class Master extends Component {
  render() {
    return(
      <React.Fragment>
        <header className="navbar navbar-expand-lg navbar-light bg-header shadow mb-5 ">
          <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">
              <img src={logo} height="30" className="d-inline-block align-top mr-2" alt=""/>
              SAEST
            </Link>
          </div>
        </header>
        <main className="main_content" >
          {this.props.children}
        </main>
        <footer className="navbar navbar-expand-lg navbar-light bg-header">
          <div className="container">
            <div className="d-flex justify-content-center">
              <img src={logo} height="30" alt=""/>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Master