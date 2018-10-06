import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// actions
import * as LoginAction from '../../actions/Login'

// react-icons
import { FaHandsHelping, FaUserGraduate, FaUserEdit, FaUserNinja } from 'react-icons/fa'

// components
import { Container, GridRow, GridCol } from '../../components/Grid'
import Card from '../../components/Card'
import Jumbotron from '../../components/Jumbotron'
import Button from '../../components/Button'
import Box from '../../components/Box'
import Input from '../../components/Input'

// layout
import Layout from '../../layouts/Master'

class Admin extends Component {
  
  constructor(props){
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    const { history } = this.props
    this.props.logout(history)
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <Container>
          <h3>{`Bem vindo ao SIGAEST, ${data.name} ${data.surname}`}</h3>
          <p className="lead">
            Utilize o menu abaixo para realizar suas ações dentro do sistema.
          </p>
          <GridRow>
            <GridCol xs={12} sm={12}>
              <Card 
                title={
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h5>{`Menu do ${data.type === "admin" ? "Administrador" : "Aluno"}`}</h5>
                    <Button color="link" onClick={() => this.handleLogout()}>Sair</Button>
                  </div>
                }
                footer={data.type === "admin" ?
                  <GridRow>
                    <GridCol xs={12} sm={6}>
                      <Input id="search_aluno" label="Pesquise informações de um aluno especifíco." type="text" placeholder="Nome do aluno" />
                    </GridCol>
                  </GridRow>
                  : null
                }>
                <GridRow>
                  <GridCol xs={12} sm={4}>
                    <Jumbotron>
                      <h5>Dados pessoais</h5>
                      <p className="mb-0"><strong>Nome:</strong> {`${data.name} ${data.surname}`}</p>
                      <p className="mb-0"><strong>Email:</strong> {data.email}</p>
                      <p className="mb-0"><strong>Cargo:</strong> {data.type}</p>
                      <p className="mb-0"><strong>CPF:</strong> {data.cpf}</p>
                    </Jumbotron>
                  </GridCol>
                  <GridCol xs={12} sm={8}>
                    <GridRow>
                      <GridCol xs={12} sm={3} >
                        <Link to="/editais">
                          <Box>
                            <FaHandsHelping />
                            <p className="mb-0">Editais</p>
                          </Box>
                        </Link>
                      </GridCol>
                      {data.type === 'admin' ? 
                        <GridCol xs={12} sm={3}>
                          <Link to="/alunos">
                            <Box>
                              <FaUserGraduate />
                              <p className="mb-0">Alunos</p>
                            </Box>
                          </Link>
                        </GridCol> : null}
                      <GridCol xs={12} sm={3}>
                        <Link to="/editar-perfil">
                          <Box>
                            <FaUserEdit />
                            <p className="mb-0">Editar Perfil</p>
                          </Box>
                        </Link>
                      </GridCol>
                      {data.type === 'admin' ? 
                      <GridCol xs={12} sm={3}>
                        <Link to="/cadastro-admin">
                          <Box>
                            <FaUserNinja />
                            <p className="mb-0">Novo Admin</p>
                          </Box>
                        </Link>
                      </GridCol> : null}
                    </GridRow>
                  </GridCol>
                </GridRow>
              </Card>
              <div className="text-center">
                <p className="mb-0">Superitêndencia de Assistência Estudantil</p>
                <p className="mb-0">Pro-reitoria de extensão da UFPa</p>
                <p className="mb-4">Universidade Federal do Pará</p>
              </div>
            </GridCol>
          </GridRow>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  data: state.session.user
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Admin)