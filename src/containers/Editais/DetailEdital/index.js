import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as EditaisActions from '../../../actions/Editais'

// react-icons
import { MdCreate, MdClear } from "react-icons/md"

// components
import { Container, GridRow, GridCol } from '../../../components/Grid'
import Card from '../../../components/Card'
import Button from '../../../components/Button'
import ButtonIcon from '../../../components/ButtonIcon'
import { InputStatic } from '../../../components/Input'

// layout
import Layout from '../../../layouts/Master'

class DetailsEdital extends Component {

  constructor(props) {
    super(props)

    this.handleCancel = this.handleCancel.bind(this)
    this.handleSub = this.handleSub.bind(this)
  }

  handleCancel() {
    this.props.history.push('/editais')
  }

  handleEdit() {
    const { match } = this.props;
    this.props.history.push(`/editar-edital/${match.params.index}`)
  }

  handleSub() {
    const { match, editais } = this.props;
    const info = editais.data[match.params.index]

    const data = {
      ...info,
      subscribe: true,
    }

    this.props.editEdital(info.id, data)
  }

  render() {
    const { match, editais, user } = this.props;
    const data = editais.data[match.params.index]
    return(
      <Layout>
        <Container>
          <h3>{`Edital ${data.name}`}</h3>
          <p className="lead">
            Verifiquer e realize ações referente ao edital escolhido.
          </p>
          <GridRow>
            <GridCol xs={12} md={12}>
              <Card 
                title={
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h5>Panel de visualização do edital</h5>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      {user.type === "admin" ? 
                        <ButtonIcon onClick={() => this.handleEdit()} outline="warning">
                          <MdCreate/>
                        </ButtonIcon>
                        :
                        <Button onClick={() => this.handleSub()} color="link" >Inscrever-se</Button>
                      }
                      <ButtonIcon onClick={() => this.handleCancel()} outline="danger">
                        <MdClear/>
                      </ButtonIcon>
                    </div>
                  </div>
                }
              >
                <InputStatic
                  id="staticName" label="Nome" type="text" value={data.name} />
                
                <InputStatic
                  id="staticDescricao" label="Descrição" type="text" value={data.description} />

                <InputStatic
                  id="staticType" label="Tipo" type="text" value={data.type} />

                <InputStatic
                  id="staticStatus" label="Status" type="text" value={data.status} />

                <InputStatic
                  id="staticSub" label="Inscrito" type="text" value={data.subscribe ? 'sim' : 'não'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsEdital)