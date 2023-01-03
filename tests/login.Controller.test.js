const chai = require('chai');
const app = require('../app');
const { expect } = require('chai');

var chaiHttp =  require('chai-http');
const { response } = require('../app');
chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();
//let's set up the data we need to pass to the login method
const userCredentials = {
  name: 'joao', 
  password: 'trybe@123'
}

const userCredentialsBad = {
  name: 'joao', 
  password: 'trybe@12'
}

const notNameCredentials = {
  name: '', 
  password: 'trybe@12'
}

const notPassCredentials = {
  name: 'joao', 
  password: ''
}

//now let's login the user before we run any tests

// var authenticatedUser = request.agent(app);before(function(done){
//   authenticatedUser
//     .post('/login')
//     .send(userCredentials)
//     .end(function(err, response){
//       expect(response.statusCode).to.equal(200);
//       //expect('Location', '/home');
//       done();
//     });
//});//this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
//after the POST has completed, make sure the status code is 200 
//also make sure that the user has been directed to the /home page

describe('Testes da rota /login', function(done){
  let token;
  const makeLogin = async() =>  {
  const response = await requester.post('/login').send(userCredentials);
  token = response.body.token
  return response;
  }

  const makeLoginBad = async() =>  {
    const response = await requester.post('/login').send(userCredentialsBad);
    token = response.body.token
    return response;
    }
  
    const loginWithouthName = async() =>  {
      const response = await requester.post('/login').send(notNameCredentials);
      token = response.body.token
      return response;
    }  

    const loginWithouthPass = async() =>  {
      const response = await requester.post('/login').send(notPassCredentials);
      token = response.body.token
      return response;
    }  
before(async()=> await makeLogin());
beforeEach(async()=> await makeLogin());

  it('Retorna o status 200,quando o login for bem sucedido!', async function () {

    const response = await makeLogin();

  expect(response.statusCode).to.be.equal(200);

  });

  it('Retorna o status 404,quando o login nao for bem sucedido!', async function () {

    const response = await makeLoginBad();

  expect(response.statusCode).to.be.equal(404);
});

  it('Quando o nome nao for informado, retorna uma mensagem e o status 404', async function () {

    const response = await loginWithouthName();

  expect(response.statusCode).to.be.equal(404);
  expect(response.body.message).to.be.equal('Nome nao informado');
  });

  it('Quando a senha nao for informada, retorna uma mensagem e o status 404', async function () {

    const response = await loginWithouthPass();

    expect(response.statusCode).to.be.equal(404);
    expect(response.body.message).to.be.equal('Senha nao informada');

  });

  // it('Quando o usuario informado nao for encontrado, retorna uma mensagem e o status 404', async function () {

  //   const response = await loginWithouthPass();

  //   expect(response.statusCode).to.be.equal(404);
  //   expect(response.body.message).to.be.equal('Senha nao informada');

  // });

//addresses 2nd bullet point: if the user is not logged in we should get a 302 response code and be directed to the /login page

// it('should return a 302 response and redirect to /login', function(done){
//   request(app).get('/profile')
//   .expect('Location', '/login')
//   .expect(302, done);
// });

});

