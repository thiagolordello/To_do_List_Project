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

describe('Testes POST da rotatasks register/ (Create Task)', (done) => {
  let token;
  const sendTask = async () => {
    const response = await (await requester.post('tasks/register/').set(tokenUser).send(newTask));
    token = response.body.token;
    return response;
  };

  const makeLoginWithoutToken = async () => {
    const response = await requester.post('tasks/register/').send(newUser);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthIdUser = async () => {
    const response = await requester.post('tasks/register/').set(tokenUser).send(notNameUser);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthDescript = async () => {
    const response = await requester.post('tasks/register/').set(tokenUser).send(notPasswdUser);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthStatus = async () => {
    const response = await requester.post('tasks/register/').set(tokenUser).send(notStatusUserTask);
    token = response.body.token;
    return response;
  };

  // before(async () => await sendTask());
  // beforeEach(async () => await sendTask());

  it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
    const response = await sendTask();

    expect(response.statusCode).to.be.equal(201);
  });

  it('Retorna o status 401,quando o post nao for bem sucedido (sem token)!', async () => {
    const response = await makeLoginWithoutToken();

    expect(response.statusCode).to.be.equal(401);
  });

  it('Quando o idUser nao for informado, retorna uma mensagem de erro e o status 500', async () => {
    const response = await postTaskWithouthIdUser();

    expect(response.statusCode).to.be.equal(500);
    expect(response.body.message).to.be.equal('notNull Violation: TasksUser.idUser cannot be null');
  });

  it('Quando a descricao nao for informada, retorna uma mensagem de erro e o status 500', async () => {
    const response = await postTaskWithouthDescript();

    expect(response.statusCode).to.be.equal(500);
    expect(response.body.message).to.be.equal('notNull Violation: TasksUser.description cannot be null');
  });

  it('Quando o status nao for informado, retorna uma mensagem e o status 500', async () => {
    const response = await postTaskWithouthStatus();

    expect(response.statusCode).to.be.equal(500);
    expect(response.body.message).to.be.equal('notNull Violation: TasksUser.status cannot be null');
  });
});
