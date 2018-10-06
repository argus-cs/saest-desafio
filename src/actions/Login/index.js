import { sessionService } from 'redux-react-session'
import * as Server from '../../api'

export const login = (pass, users, history) => {
  return () => {
    users.map(item => {
      if(item.cpf === pass.cpf && item.password === pass.password) {
        const data = {
          id: item.id,
          name: item.name,
          surname: item.surname,
          email: item.email,
          cpf: item.cpf,
          type: item.type
        }
        Server.login(data).then( res => {
          const { token } = res
          sessionService.saveSession({ token })
            .then(() => {
              sessionService.saveUser(res.data)
               .then(() => {
                 history.push('/')
               }).catch(err => console.log(err))
            }).catch(err => console.log(err))  
        })
      }
    })
  }
}

export const logout = (history) => {
  return () => {
    return Server.logout().then(() => {
      sessionService.deleteSession()
      sessionService.deleteUser()
      history.push('/login')
    }).catch(err => {
      throw (err)
    })
  }
}