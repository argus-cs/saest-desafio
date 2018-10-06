import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as EditaisActions from '../../actions/Editais'

// react-icons
import { MdDone, MdCreate, MdClear } from "react-icons/md"

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import Table from '../../components/Table'
import Button from '../../components/Button'
import ButtonIcon from '../../components/ButtonIcon'

// layout
import Layout from '../../layouts/Master'

class Editais extends Component {

  constructor(props) {
    super(props)

    this.handleNewEdital = this.handleNewEdital.bind(this)
  }

  handleNewEdital() {
    this.props.history.push('/new-edital')
  }

  handleDetails(index) {
    this.props.history.push(`/detail-edital/${index}`)
  }

  handleEdit(index) {
    this.props.history.push(`/editar-edital/${index}`)
  }

  handleDelete(id) {
    this.props.deleteEdital(id)
  }

  render() {
    const { editais, user } = this.props
    return(
      <Layout>
        <Container>
          <h3>Painel de editais</h3>
          <p className="lead">
            Utilize o menu abaixo para administrar os editais no sistema.
          </p>
          <GridRow>
            <GridCol xs={12} sm={12}>
              <Card 
                title={
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h5>Lista de editais</h5>
                    {user.type === 'admin' &&
                      <Button onClick={() => this.handleNewEdital()} color="primary">Criar edital</Button>
                    }
                  </div>
                }>
                  <Table
                    hover
                    heads={['Nome', 'Descrição', 'Status', 'Ações']}
                    contents={editais.data.map((item, index) => {
                      return [
                        item.name,
                        item.description,
                        item.status,
                        <div className="d-flex">
                          <ButtonIcon onClick={() => this.handleDetails(index)} outline="primary">
                            <MdDone/>
                          </ButtonIcon>
                          {user.type === 'admin' &&
                            <React.Fragment>
                              <ButtonIcon onClick={() => this.handleEdit(index)} outline="warning">
                                <MdCreate />
                              </ButtonIcon>
                              <ButtonIcon onClick={() => this.handleDelete(item.id)} outline="danger">
                                <MdClear />
                              </ButtonIcon>
                            </React.Fragment>
                          }
                        </div>]
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
  editais: state.editais,
  user: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators(EditaisActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Editais)