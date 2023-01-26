const chai = require('chai');
const { expect } = require('chai');

const chaiHttp = require('chai-http');
const app = require('../app');
// const { response } = require('../app');

chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();


const newUser = {
    name: "usuario.teste",
    password: "123456" ,
};

const notNameUser = {
    name: "",
    password: "123456",
};

const notPasswdUser = {
    name: "usuario.teste",
    password: "" ,
};

const notDataUserTask = {
    name: "",
    password: "" ,
  
};

const nullDataUsrTask = {};

describe('Testes POST da rota tasks register/ (Create User)', (done) => {
  let token;
  const sendNewUser = async () => {
    const response = await (await requester.post('tasks/register/').send(newUser));
    return response;
  };

 
  const postUserWithouthName = async () => {
    const response = await requester.post('tasks/register/').send(notNameUser);
    return response;
  };

  const postUserWithouthPass = async () => {
    const response = await requester.post('tasks/register/').send(notPasswdUser);
    return response;
  };

  const postUserWithouthData = async () => {
    const response = await requester.post('tasks/register/').send(notDataUserTask);
    return response;
  };

  // before(async () => await sendTask());
  // beforeEach(async () => await sendTask());

  it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
    const response = await sendNewUser();
    expect(response.statusCode).to.be.equal(201);
  });
 

  it('Quando somente a senha for informada, retorna uma mensagem de erro e o status 401', async () => {
    const response = await postUserWithouthName();
    expect(response.statusCode).to.be.equal(401);
    expect(response.body.message).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
  });

  it('Quando somente o nome for informado, retorna uma mensagem de erro e o status 401', async () => {
    const response = await postUserWithouthPass();

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.message).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
  });

  it('Quando o usuario e a senha nao foram informados, retorna uma mensagem e o status 500', async () => {
    const response = await postUserWithouthData();

    expect(response.statusCode).to.be.equal(500);
    expect(response.body.message).to.be.equal('notNull Violation: TasksUser.status cannot be null');
  });
});
