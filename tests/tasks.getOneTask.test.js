const chai = require('chai');
const { expect } = require('chai');

const chaiHttp = require('chai-http');
const app = require('../app');
const { response } = require('../app');

chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();

const tokenBadUser = { Authorization: '123456' };
const notToken = {};
const tokenUser = { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibG9yZGVsbG8iLCJpZCI6NSwiaWF0IjoxNjg2MTUwNTg4LCJleHAiOjE2OTM5MjY1ODh9.ebwAC216l0FR7mE_7u41ocDsH0UrjGl7HksUlJirha0' };
const oneTasksUser = {
  id: 1,
  idUser: 5,
  description: 'refazer o back end',
  status: 'concluido',
  createdAt: '2022-11-07T14:08:21.000Z',
};

describe('Testes GET da rota /tasks/onetask/idTask', (done) => {
  let token;

  const reqOneTaskById = async (tkn) => {
    const response = await (requester.get('/tasks/onetask/1').set(tkn));
    return response;
  };

  const sendReqTasksByUser2 = async (tknBad) => {
    const response = await (requester.get('/tasks/2').set(tknBad));
    return response;
  };

  it('Retorna o status 200,quando a requisicao get for bem sucedida e valida o retorno da task requisitada!', async () => {
    const response = await reqOneTaskById(tokenUser);

    expect(response.statusCode).to.be.equal(201);
    expect(response.body).to.deep.equal(oneTasksUser);
  });

  it('Retorna o status 401 e mensagem, quando o token enviado no header nao e valido!', async () => {
    const response = await sendReqTasksByUser2(tokenBadUser);

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.message).to.be.equal('jwt malformed');
  });

  it('Retorna o status 401 e mensagem, quando o token for ausente no header!', async () => {
    const response = await reqOneTaskById(notToken);

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.error).to.be.equal('Token não encontrado');
  });
});
