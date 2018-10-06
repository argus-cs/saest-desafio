import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as UserActions from '../../actions/Users'

// react-icons
import { MdClear } from "react-icons/md"

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import ButtonIcon from '../../components/ButtonIcon'
import Table from '../../components/Table'

// layout
import Layout from '../../layouts/Master'

class Alunos extends Component {

  constructor(props){
    super(props)

    this.handleCancel = this.handleCancel.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleCancel() {
    this.props.history.push('/')
  }

  handleType(type, data) {
    let arr = []
    data.map(item => {
      return item.type === type && arr.push(item)
    })
    return arr
  }

  handleDelete(id){
    this.props.deleteUser(id)
  }

  render() {
    const data = this.handleType('aluno', this.props.users.data)
    return(
      <Layout>
        <Container>
          <h3>Lista de Alunos</h3>
          <p className="lead">
            Utilize o menu abaixo para visualizar a lista de alunos cadastrados no sistema.
          </p>
          <GridRow>
            <GridCol xs={12} sm={12}>
              <Card title={
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h5>Lista de alunos</h5>
                  <ButtonIcon onClick={() => this.handleCancel()} outline="danger">
                    <MdClear/>
                  </ButtonIcon>
                </div>
              }>
                <Table
                  hover
                  heads={['Nome', 'Type', 'CPF', 'Email', 'Ações']}
                  contents={data.map((item) => {
                    return [
                      `${item.name} ${item.surname}`,
                      item.type,
                      item.cpf,
                      item.email,
                      <div className="d-flex">
                        <ButtonIcon onClick={() => this.handleDelete(item.id)} outline="danger">
                          <MdClear />
                        </ButtonIcon>
                      </div>
                    ]
                })} />
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

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Alunos)