# SAEST Selections

Demo online: https://argus-cs.github.io/saest-desafio/

## Instruções

Login pode ser feito por dois usuários pré-cadastrados na aplicação...

```
admin: {
  cpf: "123456789",
  password: "123456"
},
aluno: {
  cpf: "987654321",
  password: "123456"
}

```
outros usuários podem ser adicionado como alunos ao criar sua conta na tela de login, ou criar um usuário administrativo seguindo o link /cadastro-admin, que foi deixada desprotegida para facilitar a criação de administradores no sistema.

# SAEST Selections

## Objetivo 

Verificar nivel de habilidades do desenvolvedor entrevistado, mensurar tempo necessário para desenvolvimento de funcionalidades e validar/nivelar expertises presentes no curriculo do desenvolvedor.

## Requisitos

- Telas restritas devem estar protegidas de acesso, caso não exista sessão ou autenticação.
- Cadastro de conta de aluno e administrador.
- Painel administrativo e de aluno.
- Após login, realizar redirecionamento para tela do usuário em questão.
- Deve existir uma sessão para autenticação.
- Usuário irá poder fazer logoff.
- O aluno poderá editar suas informações.
- O aluno poderá visualizar editais existentes atualmente no sistema.
- O aluno poderá se cadastrar em editais existentes atualmente no sistema.
- O administrador poderá editar suas informações.
- O administrador poderá criar, excluir e editar editais ao sistema.
- O administrador poderá ver todos os alunos cadastrados no sistema.
- O administrador poderá ver todos os editais no sistema.

**Requisitos a mais são bem vindos e serão vistos como pontos a mais.**

## Estilos

Telas para referencia estão dentro da pasta "telas-referencia". **Nem todas as telas dos requisitos foram referenciadas na pasta**, utilize sua criatividade para criar as telas dos requisitos faltantes, sua critividade é bem vinda.
Utilizar estilos do guide style providenciado na pasta "style-guide", porém a critividade e senso critico do desenvolvedor é aceita.

## Organização

O projeto deve está organizado da seguinte forma:

- src
  - actions    
  - components
  - containers
  - images
  - reducers
  - styles
  - api.js
  - index.js

Abaixo, estão a função dos principais diretórios:

| Pasta        | Função           |
| ------------- |-------------|
| Actions     | Contem todas as ações que o Front-end irá realizar ao se comunicar com API e mudança de estado no reducer. |
| Components     | Componentes "burros" reutilizaveis do sistema.|
| Containers | Componentes "inteligentes" que renderizam componentes "burros" em função do estado atual da aplicação. |
| Reducers | Gerenciadores do estado da aplicação. |

## Regras e Tecnologias

Atenção, utilize **TODAS** as bibliotecas abaixo:

Nome | Função 
|---| -----|
bootstrap | Framework de interfaces responsivas
react-icons | Conjunto de icones para react
react-redux | Ligação do React com Redux
react-router-dom | Criador de rotas 
redux | Conteiner de estado previsível
redux-form | Biblioteca para geração de formulários com ajuda do redux
redux-react-session | Criação de sessão com redux

- Utilizar a arquitetura organizacional informada na **Organização**.
- Utilize o "npm" para instalação da lib em seu projeto.

## Simulação de API

Todas funcionalidades "actions" que irão envolver uma API(Back-end), devem ser simuladas com funções "burras" no Front-end. Por exemplo, na autenticação de um usuário para acesso ao sistema, se utilizando uma API, teriamos o seguinte:


```
const login = (data) => {
  // Axios é uma biblioteca para realizar chamadas em HTTP
  axios({
    method: 'post',
    url: API_LINK + 'login/',
    data: {
      cpf: data.cpf,
      password: data.senha
    }
  })
  .then(success => {
    // Criar sessão e da acesso ao usuário
    // Manda o dispatch para o reducer especifico
  })
  .catch(error => {
    // Apresenta erro ao usuário
    // Manda o dispatch para o reducer especifico
  })
}
```

Simulando uma API com funções burras teremos:

```
const login = (data) => {
  if(data.cpf === '123456' || data.senha === '123456')
    // Criar sessão e da acesso ao usuário
    // Manda o dispatch para o reducer especifico
  else
    // Apresenta erro ao usuário
    // Manda o dispatch para o reducer especifico
}
```

## Tempo para desenvolvimento

Seis dias após o envio do projeto para o email do participante, ou seja dia 07/10 ás 23:59.

## Critérios para avaliação

- Código limpo e testado;
- Utilização do guide style;
- Pontualidade (prazo);
- Usabilidade;
- Performance;
- O máximo de funcionalidades desenvolvidas possiveis;

## Submissão

Enviar link do repositorio público no Github para saest.ti@gmail.com com titulo: Desafio SAEST - [SEU NOME]. Assim como um link para visualização em produção do projeto rodando.

**Projetos sem link em produção serão automaticamente descartados e o processo encerrado.**

Dicas para produção: github pages ou heroku.


## Dúvidas
Qualquer dúvida (técnica/requisito/processo) enviar e-mail para saest.ti@gmail.com com o titulo: Dúvida Desafio SAEST - [SEU NOME].
