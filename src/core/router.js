import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter  , Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRouter'

// imports containers
import Login from '../containers/Login'
import Cadastro from '../containers/Cadastro'
import Dashboard from '../containers/Dashboard'
import Editais from '../containers/Editais'
import NewEdital from '../containers/Editais/NewEdital'
import DetailEdital from '../containers/Editais/DetailEdital'
import EditEdital from '../containers/Editais/EditEdital'
import Info from '../containers/Info'
import Alunos from '../containers/Alunos'

const routes = ({ authenticated, checked }) => (
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    {checked && 
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} authenticated={authenticated} />
        <PrivateRoute exact path="/editais" component={Editais} authenticated={authenticated} />
        <PrivateRoute exact path="/new-edital" component={NewEdital} authenticated={authenticated} />
        <PrivateRoute path="/detail-edital/:index" component={DetailEdital} authenticated={authenticated} />
        <PrivateRoute path="/editar-edital/:index" component={EditEdital} authenticated={authenticated} />
        <PrivateRoute path="/editar-perfil" component={Info} authenticated={authenticated} />
        <PrivateRoute path="/alunos" component={Alunos} authenticated={authenticated} />
        <Route path="/cadastro-admin" component={Cadastro} />
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/login' component={Login}/>
      </Switch>
    }
  </BrowserRouter>
)

const mapStateToProps = ({session}) => ({
  checked: session.checked,
  authenticated: session.authenticated
})

export default connect(mapStateToProps)(routes)