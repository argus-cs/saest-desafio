import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

// actions
import * as EditalActions from '../../../actions/Editais'

// components
import { Container, GridRow, GridCol } from '../../../components/Grid'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import Input, { InputRadioCheck } from '../../../components/Input'
import Jumbotron from '../../../components/Jumbotron'

// Layout
import Layout from '../../../layouts/Master'

class NewEdital extends Component {

  constructor(props){
    super(props)

    this.submit = this.submit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  submit(info) {
    const { history } = this.props
    const data = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name: info.name ? info.name : 'no-name',
      description: info.description ? info.description : 'no-description',
      status: info.status ? info.status : 'Desativado',
      type: info.editalType ? info.editalType : 'Edital',
      subscribe: false,
      modality: {
        graduacao: info.graduacao ? info.graduacao : false,
        tecnico: info.tecnico ? info.tecnico : false,
        pos: info.posgraduacao ? info.posgraduacao : false,
        mestrado: info.mestrado ? info.mestrado : false,
        doutorado: info.doutorado ? info.doutorado : false
      }
    }
    this.props.newEdital(data, history)
  }

  handleCancel() {
    this.props.history.push('/editais')
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

  renderInputRadioCheck({
    input,
    label,
    ...props
  }) {
    return(
      <InputRadioCheck label={label} {...props} {...input} />
    )
  }

  render(){
    const { user, handleSubmit } = this.props
    if(user.type !== 'admin'){
      return(
        <Layout>
          <Container>
            <GridRow>
              <GridCol xs={12} sm={12}>
                <Jumbotron>
                  <h4>Apenás administradores podem adicionar edital.</h4>
                </Jumbotron>
              </GridCol>
            </GridRow>
          </Container>
        </Layout>
      ) 
    } else {
      return(
        <Layout>
          <Container>
            <h3>Criar edital</h3>
            <p className="lead">
              Preencha o formulario abaixo para a criação de um novo edital no sistema.
            </p>
            <GridRow>
              <GridCol xs={12} sm={12}>
                <Card
                  title={
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <h5>Painel de criação de edital</h5>
                      <Button onClick={() => this.handleCancel()} color="danger">Cancelar</Button>
                    </div>
                  }>
                    <GridCol xs={12} sm={12}>
                      <form onSubmit={handleSubmit(this.submit)}>
                        <Field name="name" 
                          id="name" label="Name" type="text" 
                          placeholder="Digite o nome do edital" component={this.renderInput} />
                        <Field name="description"
                          id="description" label="Descrição" type="text" 
                          placeholder="Digite uma descrição para o edital" component={this.renderInput} />

                        <div className="mb-3">
                          <p>Qual é o atual status do edital?</p>
                          <Field name="status" value="desativado" 
                            id="statusD" label="Desativado" type="radio" component={this.renderInputRadioCheck} />
                          <Field name="status" value="ativo" 
                            id="statusA" label="Ativo" type="radio" component={this.renderInputRadioCheck} />
                        </div>

                        <div className="mb-3">
                          <p>Qual é o tipo do edital?</p>
                          <Field name="editalType" value="Edital" 
                            id="edital" label="Edital" type="radio" component={this.renderInputRadioCheck} />
                          <Field name="editalType" value="Instrução Normativa" 
                            id="insNormativa" label="Instrução Normativa" type="radio" component={this.renderInputRadioCheck} />
                        </div>

                        <div className="mb-3">
                          <p>Selecione a modalidade do curso:</p>
                          <Field name="graduacao" 
                            id="gradacao" label="Graduação" type="checkbox" component={this.renderInputRadioCheck} />
                          <Field name="tecnico" 
                            id="tecnico" label="Técnico" type="checkbox" component={this.renderInputRadioCheck} />
                          <Field name="posgraduacao" 
                            id="posgraduacao" label="Pós Graduação" type="checkbox" component={this.renderInputRadioCheck} />
                          <Field name="mestrado"
                            id="mestrado" label="Mestrado" type="checkbox" component={this.renderInputRadioCheck} />
                          <Field name="doutorado"
                            id="doutorado" label="Doutorado" type="checkbox" component={this.renderInputRadioCheck} />
                        </div>
                        <Button color="primary" type="submit" block>Criar edital</Button>
                      </form>
                    </GridCol>
                  </Card>
              </GridCol>
            </GridRow>
          </Container>
        </Layout>
      )
    }
  }
}

const mapStateToProps = state => ({
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators(EditalActions, dispatch)

NewEdital = connect(mapStateToProps, mapDispatchToProps)(NewEdital)

export default reduxForm({
  form: 'newEdital'
})(NewEdital)