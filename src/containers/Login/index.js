import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form'

// actions
import * as LoginActions from '../../actions/Login';

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Table from '../../components/Table'

// layout
import Layout from '../../layouts/Master'

class Login extends Component {

  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.renderInput = this.renderInput.bind(this)
  }

  submit(pass){
    const { history } = this.props
    const { data } = this.props.users
    this.props.login(pass, data, history)
  }

  renderInput({
    input,
    label,
    ...custom
  }) {
    return(
      <Input label={label} {...custom} {...input} />
    )
  }

  render() {
    const { handleSubmit } = this.props
    return(
      <Layout>
        <Container>
          <GridRow>
            <GridCol sm={12} md={4}>
              <Card title="Realize seu login">
                <form onSubmit={handleSubmit(this.submit)} >
                  <Field name="cpf" 
                    id="cpf" label="CPF" type="text" 
                    placeholder="Digite seu CPF" component={this.renderInput} />

                  <Field name="password" 
                    id="password" label="Senha" type="password" 
                    placeholder="Digite sua Senha" component={this.renderInput} />

                  <Button color="gray" type="submit" block >Entrar</Button>
                  <div className="text-center mt-4">
                    <Link to="#" >Sua conta não possui senha?</Link>
                  </div>
                  <div className="text-center">
                    <Link to="#">Esqueceu sua senha?</Link>
                  </div>
                </form>
              </Card>
              <Card title="Crie sua conta">
                <div className="text-center">
                  <Link to="/cadastro">Ainda não possui uma conta? Click aqui.</Link>
                </div>
              </Card>
            </GridCol>
            <GridCol sm={12} md={8}>
              <Card title="Últimas noticias" >
                <Table
                  hover
                  heads={["Notícia", "Descrição", "Data"]}
                  contents={[
                    ["lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "03/10/2018"],
                    ["lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "03/10/2018"],
                  ]} />
              </Card>
            </GridCol>
          </GridRow>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

Login = connect(mapStateToProps , mapDispatchToProps)(Login)

export default reduxForm({
  form: 'login'
})(Login)