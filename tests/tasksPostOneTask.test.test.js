const chai = require('chai');
const { expect } = require('chai');

const chaiHttp = require('chai-http');
const app = require('../app');
// const { response } = require('../app');

chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();

const tokenUser = { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiam9hbyIsImlkIjo0LCJpYXQiOjE2ODAzNDcwMTUsImV4cCI6MTY4ODEyMzAxNX0.eOQGXxXl_f1RtQfksbQ6TYHKP1Zo_WKVXp2LcC6QDtw' };

const newTask = {
  idUser: 6,
  description: 'Correr de manha',
  status: 'Pendente',
};

const userTask = {
  idUser: 6,
  description: 'Correr de manha',
  status: 'Pendente',
};

const notIdUserTask = {

  description: 'correr de manha',
  status: 'Pendente',
};

const notDescripUserTask = {
  idUser: 6,
  status: 'Pendente',
};

const notStatusUserTask = {
  idUser: 6,
  description: 'Correr de manha',
};

describe('Testes POST da rota tasks/ (Create Task)', (done) => {
  let token;
  const sendTask = async () => {
    const response = await (await requester.post('/tasks/').set(tokenUser).send(newTask));
    token = response.body.token;
    return response;
  };

  const makeLoginWithoutToken = async () => {
    const response = await requester.post('/tasks/').send(userTask);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthIdUser = async () => {
    const response = await requester.post('/tasks/').set(tokenUser).send(notIdUserTask);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthDescript = async () => {
    const response = await requester.post('/tasks/').set(tokenUser).send(notDescripUserTask);
    token = response.body.token;
    return response;
  };

  const postTaskWithouthStatus = async () => {
    const response = await requester.post('/tasks/').set(tokenUser).send(notStatusUserTask);
    token = response.body.token;
    return response;
  };


  it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
    const response = await sendTask();

    expect(response.statusCode).to.be.equal(201);
  });

  it('Retorna o status 401,quando o post nao for bem sucedido (sem token)!', async () => {
    const response = await makeLoginWithoutToken();

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.error).to.be.equal('Token não encontrado');
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