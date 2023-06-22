# To Do List (Backend)

Este sistema permite o usuário por meio de login e senha, controlar suas tarefas registradas criando,editando e removendo as suas tasks.

## 🚀 Sua lista de tarefas para usar a qualquer hora em qualquer lugar.

Essas instruções permitirão que você obtenha uma cópia do projeto em operação no seu computador para fins de desenvolvimento e teste.



### 📋 Pré-requisitos

Banco de dados MySql instalado em docker ou local
Nodejs versão 14.21.3
Node Package Manager 
``
### 🔧 Instalação


1. Clone o repositório: Abra o terminal e digite o comando abaixo. 
```
git clone https://github.com/thiagolordello/todolist_backend.git
```

2. Entre no diretório criado, e instale as dependências do projeto:
```
cd todolist_backend/
```
```
npm install
```

3. Inicie a aplicação com o comando de script:
```
npm run debug
```  
  Se a aplicação tiver sido iniciada corretamente, haverá a seguinte mensagem ao iniciar      o serviço: 
   'starting `node index.js  Executando na porta 3001'. Em caso de erro repita o processo.

4. Com o serviço do MySql em execução, execute os scripts do sequelize para a criação do banco:
```
npm run setdb
```  
```
npm run seed
``` 

5. Verifique no MySql se o banco 'todolist_dev_bd' foi criado e se as tabelas foram populadas pelo último comando do passo anterior.

   Se estiver tudo ok, está pronto para uso, caso contrário repita os passos para a correta instalação da aplicação.
   
## ![computer](https://github.com/thiagolordello/todolist_backend/assets/20212304/7818fd10-09fd-4a9c-936f-662b1b393763)  Vamos a pratica! Utilização das rotas:

#### Atenção!

Para prosseguir com a utilização das rotas, você poderá optar por utilizar a aplicação em nuvem (ambiente já disponível e não precisa de instalação) ou em ambiente local (precisará instalar as dependências na raiz do projeto "/todolist_backend"). Nos exemplos de chamadas abaixo, elas estão com o apontamento local 'localhost'. Caso sua escolha seja fazer direto na API em nuvem, basta substituir o início de cada chamada, trocando o trecho  ```localhost:3001/"``` por ```https://to-do-list-backend-production-0a07.up.railway.app/"``` em cada chamada que for utilizar. 

Exemplo : 

Para a chamada que faz o get all das tarefas ao invés de usar ```localhost:3001/tasks/5``` use ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/5```



#### Vamos ao que interessa !

#### Registro de novo usuário POST /register:

Na rota post '/register', fazemos a criação de um usuário informando um json com as chaves name e password no corpo da requisição contendo os valores de nome de usuário e senha. Todas as rotas e o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. Se a requisição for bem sucedida a api retornará um ```status code 201```. Caso não seja bem sucedida, retornará outro codigo com a mensagem do erro corespondente.

```localhost:3001/register``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/register```

![Captura de tela de 2023-06-02 15-26-06](https://github.com/thiagolordello/todolist_backend/assets/20212304/fb2e45a6-67f6-4498-94f5-43fd67f40651)


#### Login na aplicação (pré-requisito para as demais rotas) POST /login:

Na rota POST '/login', fazemos a criação de um usuário, informando um JSON com as chaves "name" e "password" no corpo da requisição, contendo os valores de nome de usuário e senha. Todas as rotas, assim como o token gerado no login, contam com middlewares de erro para o caso de chamadas indevidas. Se a requisição for bem-sucedida, a API retornará o token, que é pré-requisito para as demais requisições. Portanto, assim que efetuar a requisição de login, copie a chave "token" para que possa usá-la nas próximas requisições. Como o nome sugere, este endpoint efetua o login fornecendo "name" e "password" no momento da requisição. Deve ser informado no body um json com as chaves name e password contendo os valores do nome do usuário a criar e a senha. Se a requisição for bem sucedida a api retornará um ```status code 200```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/login"``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/login```

![Captura de tela de 2023-06-02 15-17-47](https://github.com/thiagolordello/todolist_backend/assets/20212304/bd64288b-de60-45c4-967b-6b4e79c39709)


#### Listar todas as tarefas GET /tasks/iduser:

A rota get '/:id', realiza a consulta de todas as tarefas existentes para o usuário autenticado com senha e token por meio do id de usuário logado. No momento da chamada, deve ser informado no header da reuisicão o campo Authorization com o valor do token gerado apos o login. Se a requisição for bem sucedida a api retornará um ```status code 200```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/12``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/12```

![Captura de tela de 2023-06-02 11-18-18](https://github.com/thiagolordello/todolist_backend/assets/20212304/0a812f7b-8e48-459e-a02a-97c971cdf4d5)



#### Lista uma tarefa pelo id da tarefa GET /tasks/onetask/id_da_tarefa:

A rota GET '/onetask/:id' realiza a consulta de uma tarefa existente para o usuário autenticado pelo id da tarefa, utilizando senha e token. No header da requisição, deve ser informado o campo "Authorization" com o valor do token gerado após o login. Se a requisição for bem sucedida a api retornará um ```status code 200```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/onetask/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/onetask/10```

![Captura de tela de 2023-06-02 14-17-31](https://github.com/thiagolordello/todolist_backend/assets/20212304/6d1c9753-9c68-41b1-8e84-26f74e442b89)


#### Salvando uma nova tarefa POST /tasks :
A rota POST '/tasks',é a rota para a criação de uma tarefa. Deve ser fornecido no body da requisição um json com as chaves idUser,description e status. Nelas estarão respectivamnete informados o id do usuario logado, a descricão da task a ser criada e o status da task. Se a requisição for bem sucedida a api retornará um ```status code 201```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/```

![Captura de tela de 2023-06-02 14-30-03](https://github.com/thiagolordello/todolist_backend/assets/20212304/7e32da1a-62f6-4327-b9f2-92ff8f6b3cdc)


#### Editando uma tarefa pelo id da tarefa PUT /id_da_tarefa :
A rota PUT '/:id' faz a alteração de uma tarefa fornecendo o id da tarefa. Deve ser fornecido no body da requisição um json com as chaves idUser,description e status. Nelas estarão respectivamnete informados o id do usuario logado, a descrição da task a ser editada e o status da task. Deve ser informado no header da requisição o campo Authorization com o valor do token gerado apos o login. Se a requisição for bem sucedida a api retornará um ```status code 204```. Caso não seja bem sucedida, retornará outro código com a mensagem do erro corespondente.

```localhost:3001/tasks/10``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/10```

![Captura de tela de 2023-06-02 14-40-57](https://github.com/thiagolordello/todolist_backend/assets/20212304/386b65b0-b22f-4f19-ba2e-e037fbf168ae)


#### Removendo uma tarefa pelo id da tarefa DELETE /id_da_tarefa :
A rota DELETE '/:id' utilizamos para deletar uma tarefa com base no id informado. Deve ser informado no header da reuisição o campo Authorization com o valor do token gerado apos o login. Se a requisição for bem sucedida a api retornará um ```status code 204```. Caso não seja bem sucedida, retornará outro codigo com a mensagem do erro corespondente.

```localhost:3001/tasks/9``` ou pela nuvem ```https://to-do-list-backend-production-0a07.up.railway.app/tasks/9```

![image](https://github.com/thiagolordello/todolist_backend/assets/20212304/302d78d5-5ca4-489a-be09-49fecc62a941)


## ![banco2](https://github.com/thiagolordello/todolist_backend/assets/20212304/2c3a6985-5eb4-412e-8af7-4269888b4f84) Arquitetura do Banco de Dados 

Para a estrutura desse projeto, foram idealizadas duas entidades relacionais onde estão dispostas as informaçoes do sistema . Na entidade users armazemanos as informações de cadastro dos usuários como name e password. Na entidade tasks_user, temos as informações diretamente ligadas as tarefas como a descrição, o status e a data de criação (createdAt), alem do id_user que referencia a que usuário a tarefa pertence.   
Para a construcão da API utlizamos a tecnologia ORM Sequelize na orquestração do banco de dados MySql

![image](https://github.com/thiagolordello/todolist_backend/assets/20212304/aebf89eb-f2b6-47b3-9800-2268db43452c)

## ⚙️ Executando os testes

Os testes foram desenvolvidos com as bibliotecas chai, chai-http e sinon. Em alguns casos de testes fazemos o acesso direto aos endpoints, simulando uma real requisição a API. Em outra parte dos testes utilizamos mocks com a biblioteca Sinon, o que faz com que não dependamos da disponibilidade da API. Todos os testes estão baseados nos dados inseridos na execução do seed que quando executado, popula o banco com uma carga inicial de dados que será usados nos testes. Portanto é fundamental executar a completa instalação do projeto incluindo a execução dos scripts detalhados no topico de instalação. Caso não seja executada a instalação por completo incluindo os scripts, os testes falharão por nao haver os dados que são usados para comparação nos testes.

Para a execução dos testes será necessário estar com aplicacao iniciada e obviamente ter sido executada a instalação do projeto no tópico acima de instalação. Caso não esteja iniciada, execute o seguinte comando de script.
```
npm run debug
```
Com a aplicação rodando execute o comando para a execução dos testes.
```
npm run test
```

## 🔩 Análise de cada teste

Todos os arquivos de teste estão no diretório '/tests' localizado na raiz do projeto. Estão dividos em sete arquivos com nomenclatura final '.test.js'. Os arquivos são: login.test.js, taskPutOneTask.test.js, tasks.getAll.test.js, tasks.getOneTask.test.js, tasksDeleteOneTask.test.js, tasksPostOneTask.test.js, e userRegister.test.js . 

### No arquivo ```login.test.js"```, estão os testes referentes a rota POST /login. Os casos de teste são os seguintes:



```Retorna o status 200,quando o login for bem sucedido!``` :

   Faz uma chamada post para a rota /login enviando name e password para efetuar o login. Se o valor informado de name e password estiverem registrados no banco a API retorna um status 200 com o body contendo os campos: name, token e id do usuario que será usado na requisição get all das tasks.

```Retorna o status 404,quando o login nao for bem sucedido!```

  Faz uma chamada post para a rota /login enviando name e password que não existem no banco para efetuar o login. 
  

```Quando o nome não for informado, retorna uma mensagem e o status 404```
  
  Faz uma chamada post para a rota /login enviando name vazio e password "" para efetuar o login.
  

```Quando a senha não for informada, retorna uma mensagem e o status 404```

  Faz uma chamada post para a rota /login enviando somente name e campo password ausente para efetuar o login.  
  

```Quando o usuario informado não for encontrado, retorna uma mensagem e o status 404```
  
  Faz uma chamada post para a rota /login enviando name e password com uma senha errada para efetuar o login.
  

```Quando o usuario e senha não for informado, retorna uma mensagem e o status 400```
  
  Faz uma chamada post para a rota /login enviando name e password vazios "" para efetuar o login.
  
  

  
  ### No arquivo ```tasks.getAll.test.js"```, estão os testes referentes a rota GET /tasks/id_user. Os casos de teste são os seguintes:

```Retorna o status 200,quando a requisição get for bem sucedida e valida o retorno das tasks do usuário!```

  Faz a requisição get para a rota /tasks/id_user para trazer todas as tarefas do usuario usuario logado. 

```Retorna o status 401 e mensagem, quando o token enviado no header não é valido!```
  
  Faz a requisição get para a rota /tasks/id_user enviando um token inválido no header para a rota /tasks/id_user para trazer todas as tarefas do usuário logado.

```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisição get para a rota /tasks/id_user não enviando token para a rota /tasks/id_user para trazer todas as tarefas do usuário usuario logado.
  
  

  ### No arquivo ```tasks.getOneTask.test.js"```, estão os testes referentes a rota GET /tasks/onetask/id_da_tarefa. Os casos de teste são os seguintes:

```Retorna o status 200,quando a requisicão get for bem sucedida e válida o retorno da task requisitada!```

  Faz a requisicão get para a rota /tasks/onetask/idTask passando o id da tarefa no header e o token gerado no login. 
  

```Retorna o status 401 e mensagem, quando o token enviado no header não é valido!```

  Faz a requisição get para a rota /tasks/onetask/idTask passando o id da tarefa no header e um token desconhecido.
    

```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisição get para a rota /tasks/onetask/idTask passando o id da tarefa no header com o token ausente. 
  
  
  
  

  ### No arquivo ```userRegister.test.js"```, estão os testes referentes a rota POST /register que registra um novo usuário. Os casos de teste so os seguintes:

```Retorna o status 201,quando a criação for bem sucedida!```

   Faz a requisição post com name e password para a rota /register.

```Quando somente a senha for informada, retorna uma mensagem de erro e o status 400```

   Faz a requisição post com name vazio  e password para a rota /register.

```Quando somente o nome for informado, retorna uma mensagem de erro e o status 400```

   Faz a requisição post com password vazio  e nome para a rota /register.

```Quando o usuário e a senha foram informados sem dados dentro (""), retorna uma mensagem e o status 400```

   Faz a requisição post com name e password vazios para a rota /register.

```Quando o usuário e a senha não foram informados no json, retorna uma mensagem e o status 500```
   
   Faz a requisição post sem as chaves name e password para a rota /register.


  ### No arquivo ```taskPutOneTask.test.js"```, estão os testes referentes a rota GET /tasks/onetask/id_da_tarefa. Os casos de teste são os seguintes:


```Retorna o status 204,quando a requisição put for bem sucedida```

  Faz a requisição put para a rota /tasks/idTask passando o id da tarefa no header e o token gerado no login. 


```Retorna o status 401 e mensagem, quando o token enviado no header nao é valido!```

  Faz a requisição put para a rota /tasks/idTask passando no header o id da tarefa no header e o token inválido. 

  
```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisição put para a rota /tasks/idTask passando no header o id da tarefa sem o token.
  
```Retorna o status 404 e mensagem, quando o id da tarefa informada não existir.```

  Faz a requisição get para a rota /tasks/onetask/idTask passando um id inexistente da tarefa no header e o token gerado no login.


  ### No arquivo ```tasksDeleteOneTask.test.js"```, estão os testes referentes a rota DELETE /tasks/id_da_tarefa. Os casos de teste são os seguintes:

```Retorna o status 200 e a mensagem "Tarefa removida com sucesso!", quando a deleção for bem sucedida```

  Faz a requisição delete para a rota /tasks/idTask passando o id da tarefa no header e o token gerado no login. Aqui é verificado se o status code é o 200 e se a mensagem de erro corresponde a enviada peal API. 
  

```Retorna o status 401 e mensagem, quando o token enviado no header não e valido!```

  Faz a requisição delete para a rota /tasks/idTask passando o id da tarefa no header e é passado um token invalido no header. Aqui é verificado se o status code é o 401 e se a mensagem de erro corresponde a enviada peal API. 

  
```Retorna o status 401 e mensagem, quando o token for ausente no header!```

  Faz a requisição delete para a rota /tasks/idTask passando o id da tarefa no header e o token gerado no login não é enviado. Aqui é verificado se o status code é o 401 e se a mensagem de erro corresponde a enviada peal API.


 ```Retorna o status 404 e mensagem, quando o id da tarefa informada nao existir.```

  Faz a requisição delete para a rota /tasks/idTask passando um id da tarefa que nao existe no header e o token gerado no login. Aqui é verificado se o status code é o 404 e se a mensagem de erro corresponde a enviada peal API. 


   ### No arquivo ```tasksPostOneTask.test.js"```, estão os testes referentes a criação de uma tarefa na rota POST tasks/ (Create Task). Os casos de teste são os seguintes:

```Retorna o status 201,quando a criação for bem sucedida!```

  Faz a requisição post para a rota /tasks/ enviando no body da requisição as chaves idUser,description e status. Aqui comparamos se o status code recebido é igual ao 201. 
  

  ```Retorna o status 401,quando o post não for bem sucedido (sem token)!```

  Faz a requisição post para a rota /tasks/ enviando no body da requisição as chaves idUser,description e status. Porem no header não é passado o token. Aqui é verificado se o status code é o 401 e se a mensagem de erro corresponde a enviada pela API.
  

  ```Quando o idUser não for informado, retorna uma mensagem de erro e o status 500```

  Faz a requisição post para a rota /tasks/ enviando no body da requisição apenas as chaves description e status. Aqui é verificado se o status code é o 500 e se a mensagem de erro corresponde a enviada pela API.

  

  ```Quando a descrição não for informada, retorna uma mensagem de erro e o status 500.```

  Faz a requisição post para a rota /tasks/ enviando no body da requisição apenas as chaves idUser e status. Aqui é verificado se o status code é o 500 e se a mensagem de erro corresponde a enviada pela API.

  

  ```Quando o status nao for informado, retorna uma mensagem e o status 500.```

  Faz a requisição post para a rota /tasks/ enviando no body da requisição apenas as chaves idUser e description. Aqui é verificado se o status code é o 500 e se a mensagem de erro corresponde a enviada pela API.
   
   

 Todos os testes foram desenvolvidos pensando na mais real situação possível das chamadas a API. Ao optar por não usar STUB na aplicação, estamos fazendo chamadas diretas a API através da biblioteca CHAI-HTTP. Para estes casos de teste, foram utilizados os dados inseridos inicialmente na aplicação por meio dos seeders que populam o banco. Para não comprometer a integridade do ambiente de testes, não faca alteracões no usuário joao pois nele estao baseados os casos de teste. Caso haja qualquer alteração dos dados inseridos nesse usuário, ocorrerão erros de execução.


## 🛠️ Construído com

Aqui estão as tecnologias que foram usadas para construir o sistema:

* [Nodejs] - O framework web usado.
* [Sequelize] - ORM para geração de banco de dados relacional Mysql
* [Chai] - Biblioteca utilizada para a geração dos testes.
* [Chai-Http] - Biblioteca usada para a chamada em tempo real das requisições web a API.
* [body-parser] - Middleware usado em node para analisar as requisições http.
* [cors] - Utilizado para obter maior segurança no tráfego http.
* [dotenv] - Utilizado para ocultar as variáveis de ambiente presentes no arquivo .env .
* [express] - Framework usado para auxiliar o tráfego das rotas.
* [frisby] - Biblioteca js usada para escrever os testes da aplicação.
* [jsonwebtoken] - Token utilizado na segunraca de login e nas demais rotas da aplicação.
* [md5] - Criptografia aplicada na encriptação de dados para salvar no banco.
* [moment] - Biblioteca usada para trabalhar com datas e horários nos testes.
* [mysql2] - Biblioteca que permite a comumicação com o banco mysql da aplicação.
* [nodemon] - Utilizado para o ambiente de desenvolvimento evitando o restart da aplicação a cada vez que alterado o código.
* [sequelize-cli] - Interface de linha de comando para o uso do sequelize.  



## ✒️ Autores

* **Desenvolvedor** - *Trabalho Inicial* - [thiagolordello]([https://github.com/linkParaPerfil](https://github.com/thiagolordello))


* **Colaboradores** - Alexsandro Xavier, Thiago Vieira e Logy.

## 📄 Licença

Este projeto tem fins apenas para estudo e demonstracão como portifólio pessoal. Está vetado o uso para fins comerciais.

## 🎁 Expressões de gratidão

* Aqui eu gostaria de agradecer a todos que me ajudam e me ajudaram nesta construção tão inportante pra minha carreira;
* Gostaria de agradecer primeiro a Deus por toda ajuda que tive, e segundo lugar a minha familia que tanto me apoia nessa jornada do desenvolvimento. 🫂;
* Agradecimento tambem aos colegas de turma Alexsandro Xavier, Thiago Vieira e Logy. Sem ajuda de vocês eu não teria concluido esse projeto. Portanto registro aqui meus sinceros agradecimentos a todos que me ajudaram a chegar onde cheguei. Gratidao.
