import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

// actions
import * as UsersActions from '../../actions/Users'

// react-icons
import { MdClear } from "react-icons/md"

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ButtonIcon from '../../components/ButtonIcon'

// layout
import Layout from '../../layouts/Master'

class Info extends Component {

  constructor(props){
    super(props)

    this.renderInput = this.renderInput.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleCancel() {
    this.props.history.push('/')
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

  submit(item) {
    const { user, history } = this.props
    const data = {
      ...user,
      name: item.name ? item.name : user.name,
      surname: item.surname ? item.surname : user.surname,
      email: item.email ? item.email : user.email,
      cpf: item.cpf ? item.cpf : user.cpf,
    }
    this.props.editUser(user.id, data, history)
  }

  render() {
    const { user, handleSubmit } = this.props
    return(
      <Layout>
        <Container>
          <h3>{`Editar informações de ${user.name}`}</h3>
          <p className="lead">
            Utilize os campos abaixo para editar suas informações no sistema.
          </p>
          <GridRow>
            <GridCol xs={12} sm={12}>
              <Card title={
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h5>Dados pessoais</h5>
                  <ButtonIcon onClick={() => this.handleCancel()} outline="danger">
                    <MdClear/>
                  </ButtonIcon>
                </div>
              }>
                <form onSubmit={handleSubmit(this.submit)}>
                  <GridRow>
                    <GridCol xs={12} sm={6}>
                      <Field name="name" 
                        id="name" label="Nome" type="text" 
                        placeholder={user.name} component={this.renderInput} />    
                    </GridCol>
                    <GridCol xs={12} sm={6}>
                      <Field name="surname" 
                        id="surname" label="Sobrenome" type="text" 
                        placeholder={user.surname} value={user.surname} component={this.renderInput} />    
                    </GridCol>
                  </GridRow>
                  <GridRow>
                    <GridCol xs={12} sm={6}>
                      <Field name="cpf" 
                        id="cpf" label="CPF" type="text" 
                        placeholder={user.cpf} value={user.cpf} component={this.renderInput} />    
                    </GridCol>
                    <GridCol xs={12} sm={6}>
                      <Field name="email" 
                        id="email" label="Email" type="email" 
                        placeholder={user.email} value={user.email} component={this.renderInput} />    
                    </GridCol>
                  </GridRow>
                  <Button color="gray" block >Salvar</Button>
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

Info = connect(mapStateToProps, mapDispatchToProps)(Info)

export default reduxForm({
  form: 'editar-perfil'
})(Info)