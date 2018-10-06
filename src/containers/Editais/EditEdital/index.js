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

class EdtEdital extends Component {

  constructor(props){
    super(props)

    this.submit = this.submit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCancel() {
    this.props.history.push('/editais')
  }

  submit(info) {
    const { match, editais } = this.props
    const dataEdital = editais.data[match.params.index]
    const data = {
      name: info.name ? info.name : dataEdital.name,
      description: info.description ? info.description : dataEdital.description,
      status: info.status ? info.status : dataEdital.status,
      type: info.editalType ? info.editalType : dataEdital.type,
      subscribe: false,
      modality: {
        graduacao: info.graduacao ? info.graduacao : dataEdital.modality.graduacao,
        tecnico: info.tecnico ? info.tecnico : dataEdital.modality.tecnico,
        pos: info.posgraduacao ? info.posgraduacao : dataEdital.modality.pos,
        mestrado: info.mestrado ? info.mestrado : dataEdital.modality.mestrado,
        doutorado: info.doutorado ? info.doutorado : dataEdital.modality.doutorado
      }
    }

    this.props.editEdital(dataEdital.id, data)
    this.props.history.push('/editais')
  }

  renderInput({
    input,
    label,
    ...props
  }) {
    return(
      <Input label={label} {...props} {...input} />
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
    const { match, editais, user, handleSubmit } = this.props
    const data = editais.data[match.params.index]
    if(user.type !== 'admin'){
      return(
        <Layout>
          <Container>
            <GridRow>
              <GridCol xs={12} sm={12}>
                <Jumbotron>
                  <h4>Apenás administradores podem editar edital.</h4>
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
            <h3>Editar edital</h3>
            <p className="lead">
              Preencha o formulario abaixo para editar um edital no sistema.
            </p>
            <GridRow>
              <GridCol xs={12} sm={12}>
                <Card
                  title={
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <h5>Painel de edição de edital</h5>
                      <Button onClick={() => this.handleCancel()} color="danger">Cancelar</Button>
                    </div>
                  }>
                    <GridCol xs={12} sm={12}>
                      <form onSubmit={handleSubmit(this.submit)}>
                        <Field name="name" 
                          id="name" label="Name" type="text" 
                          placeholder={data.name} value={data.name} component={this.renderInput} />
                        <Field name="description"
                          id="description" label="Descrição" type="text" 
                          placeholder={data.description} value={data.description} component={this.renderInput} />

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
                        <Button color="primary" type="submit" block>Salver edital</Button>
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
  editais: state.editais,
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators(EditalActions, dispatch)

EdtEdital = connect(mapStateToProps, mapDispatchToProps)(EdtEdital)

export default reduxForm({
  form: 'editEdital'
})(EdtEdital)