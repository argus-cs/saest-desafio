import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

// actions
import * as UsersActions from '../../actions/Users'

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'

// layout
import Layout from '../../layouts/Master'

class Cadastro extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      pass: ''
    }

    this.renderInput = this.renderInput.bind(this)
    this.submit = this.submit.bind(this)
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

  isEqual(equal, value) {
    if(value === equal){
      return true;
    } else {
      return false;
    }
  }

  submit(info) {
    if(this.isEqual(info.email, info.emailCheck)) {
      if(this.isEqual(info.password, info.passwordCheck)) {
        const data = {
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          name: info.name,
          surname: info.surname,
          email: info.email,
          cpf: info.cpf,
          type: this.props.match.path === "/cadastro-admin" ? 'admin' : 'aluno',
          password: info.password
        }
        this.props.addUser(data)
        this.props.match.path === "/cadastro-admin" ? this.props.history.push('/') : this.props.history.push('/login')
      } else {
        this.setState({
          pass: 'as senhas não coincidem...'
        })
      }
    } else {
      this.setState({
        email: 'os email não coincidem...'
      })
    }
  } 

  render() {
    const { handleSubmit } = this.props
    return(
      <Layout>
        <Container>
          <h3>{this.props.match.path === "/cadastro-admin" ? "Crie nova conta administrativa" : "Crie sua conta"}</h3>
          <p className="lead">
            Utilize o formulario abaixo para criar sua conta.
          </p>
          <GridRow>
            <GridCol xs={12} sm={12}>
              <Card
                title="Dados pessoais" >
                  <form onSubmit={handleSubmit(this.submit)} >
                    <GridRow>
                      <GridCol xs={12} sm={6}>
                        <Field name="name" 
                          id="name" label="Nome" type="text" 
                          placeholder="Digite seu nome" component={this.renderInput} />    
                      </GridCol>
                      <GridCol xs={12} sm={6}>
                        <Field name="surname" 
                          id="surname" label="Sobrenome" type="text" 
                          placeholder="Digite seu Sobrenome" component={this.renderInput} />    
                      </GridCol>
                    </GridRow>
                    
                    <Field name="cpf" 
                      id="cpf" label="CPF" type="text" 
                      placeholder="Digite seu CPF" component={this.renderInput} />

                    <Field name="email" 
                      id="email" label="Email" type="email" error={!! this.state.email}
                      placeholder="Digite seu email" errorMessage={this.state.email} component={this.renderInput} />

                    <Field name="emailCheck" 
                      id="emailCheck" label="Confirmação de email" type="email" error={!! this.state.email}
                      placeholder="Digite seu email novamento" component={this.renderInput} />

                    <GridRow>
                      <GridCol xs={12} sm={6}>
                        <Field name="password" 
                          id="password" label="Senha" type="password" error={!! this.state.pass}
                          placeholder="Digite sua senha" component={this.renderInput} errorMessage={this.state.pass} />
                      </GridCol>

                      <GridCol xs={12} sm={6} >
                        <Field name="passwordCheck" 
                          id="passwordCheck" label="Confirmação de senha" type="password" error={!! this.state.pass}
                          placeholder="Digite sua senha novamente" component={this.renderInput} />
                      </GridCol>
                    </GridRow>
                    <Button type="submit" color="gray" block >Criar Conta</Button>
                  </form>
                </Card>
            </GridCol>
          </GridRow>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch)

Cadastro = connect(mapStateToProps, mapDispatchToProps)(Cadastro)

export default reduxForm({
  form: 'cadastro'
})(Cadastro)