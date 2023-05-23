Back End todolist.

Sua lista de tarefas para usar a qualquer hora em todo lugar. Este sistema permite o usuario por meio de login e senha, controlar suas tarefas registradas no sistema.

Link do deploy na nuvem:

As aplicacao esta no ar com o deploy em nuvem na railway. E possivel fazer o uso pela nuvem no link: https://to-do-list-backend-production-0a07.up.railway.app  

Arquitetura das rotas:

A aplicacao foi desenvolvida de forma a realizar um CRUD na lista de tarefas.O sistema utiliza duas tabelas ( Users e Tasks ). Para realizar as operacoes atraves das rotas disponiveis, e possivel acessar:
 
Rota get '/:id' (Realiza a consulta de todas as tarefas existentes para o usuario autenticado por senha e token por meio do id de usuario logado. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login),
 
Rota '/onetask/:id' (Realiza a consulta de uma tarefa existente para o usuario autenticado por senha e token por meio do id da tarefa. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login), 

Rota post '/tasks' (Rota para a criacao de uma tarefa. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser criada e o status da task.),
 
Rota put '/:id' (Rota para a alteracao de uma tarefa fornecendo o id da tarefa a alterar. Deve ser fornecido no body da requisicao um json com as chaves idUser,description e status. Nelas estarao respectivamnete informados o id do usuario logado, a descricao da task a ser criada e o status da task. Deve ser informado no header da requisicao o campo Authorization com o valor do token gerado apos o login.),
 
Rota delete '/:id' (Rota para deletar uma tarefa com base no id informado. Deve ser informado no header da reuisicao o campo Authorization com o valor do token gerado apos o login.),
 
Rota post '/login' (Rota para login fornecendo name e password. Deve ser informado no body um json com as chaves name e password contendo os valores do nome do usuario a criar e a senha),

Rota post '/register' (Rota para a criacao de usuario informando um json contendo as chaves name e password no corpo da requisicao. Com os valores de nome de usuario e senha.).
Todas as rotas e o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. 

Arquitetura do banco de dados: 

Foi utilizado o ORM Sequelize para modelar os banco de dados utilizando a tecnologia MySql. Para esta aplicacao foi modelado as tabelas users e tasks_user . Na tabela 'users' temos as colunas: 'id','name', e 'password'. A coluna id e a chave esteageira. Na tabela tasks_user que se refere as tarefas do usuario temos as colunas: 'id' que e o identificador unico de registro de usuario e tambem e chave primaria,'id_user' e uma chave estrangeira que referencia a coluna 'id' da tabela 'users','descriptiom' que contem a descricao das tarefas,'status' que guarda o status da tarefa, created_at que guarda a hora de criacao de cada tarefa.


A arquitetura utilizada foi a Model , Service e Controller.

Estrutura do projeto:

'config' : Guarda o arquivo congig.json responsavel pelas variaveis de ambiente do banco de dados.
'controllers' : Diretorio com as controllers de cada endpoint da aplicacao.
'helpers' : Geracao dos tokens e validacao do mesmo.
'middlewares' : Validacao das requisicoes de cada rota.
'migrations' : Modelo de cada entidade no sequelize
'models' : Models de cada rota.
'routers' : Rotas de cada endpoint.
'seeders' : Seeders das tabelas users e tasks_user.
'services' : Service das rotas
'tests' : Testes automatizados.

Os arquivos .env e jwt.evaluation.key estao informados no .env e por isso nao estao presentes para visualizacao.

Tecnologias utilizadas nas dependencias do projeto:

Aplicacao desenvolvida em Nodejs versao 16.0.0. Banco de dados relacional MySql utilizando o ORM Sequelize e Sequelize-cli para a geracao. Segunranca aplicada com jsonwwebtoken ao fazer login. Senha criptografada com em md5. Dotenv para utilizar o arquivo .env , cors e express para melhor seguranca no trafego da API. Para testes foi utilizado o chai,chai-http,mocha,sinon,frisby,moment,superagent e supertest.

Instrucoes para clone e instalacao local do projeto:
Atencao para prosseguir nesta parte sera necessario ter instalado o MySql e o Nodejs versao 16.0.0 em seu ambiente. 

1. Clonar o repositorio. Abra o terminal e digite o comando: 'git clone https://github.com/thiagolordello/todolist_backend.git'

2. Entre no diretorio criado e instale as dependencias do projeto: 'cd todolist_backend/'  'npm install'.

3. Inicie a aplicacao com o comando de script: 'npm run debug'. Se a aplicacao tiver sido iniciada corretamente havera uma mensagem ao iniciar o servico 'starting `node index.js  Executando na porta 3001'

4. Com o servico do MySql no status up, execute os scripts do sequelize para a criacao do banco: 'npm run setdb' e 'npm run seed'.

5. Verifique no MySql se o banco 'todolist_dev_bd' foi criado e se as tabelas foram populadas pelo ultimo comando do passo anterior.

Se estiver tudo ok, esta pronto para uso, caso contrario repita os passos para a correta instalacao da aplicacao.

 
