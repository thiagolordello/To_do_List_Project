const chai = require('chai');
const app = require('../app');
const { expect } = require('chai');

var chaiHttp =  require('chai-http');
const { response } = require('../app');
chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();

const tokenBadUser = { "Authorization": '123456' }
const notToken = {}
const tokenUser = { "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibG9yZGVsbG8iLCJpZCI6NSwiaWF0IjoxNjcyMzIwNzIwLCJleHAiOjE2ODAwOTY3MjB9.uJmmGrnGcAnrCZqtNTXKUGaiZ_BIPz_wk8--qP2EV74' }
const tasksUser = [
    {
        "id": 2,
        "idUser": 5,
        "description": "refazer o back end",
        "status": "concluido",
        "createdAt": "2022-11-07T14:08:21.000Z"
    },
    {
        "id": 3,
        "idUser": 5,
        "description": "refazer o front-end",
        "status": "concluido",
        "createdAt": "2022-11-07T14:08:44.000Z"
    },
    {
        "id": 4,
        "idUser": 5,
        "description": "Falar com o Victor",
        "status": "Pendente",
        "createdAt": "2022-11-07T19:34:52.000Z"
    },
    {
        "id": 6,
        "idUser": 5,
        "description": "desenvolver os testes",
        "status": "pendente",
        "createdAt": "2022-12-29T14:08:14.000Z"
    }
]


describe('Testes get da rota /tasks/idUser', function(done){
  let token;

  const sendReqTasksByUser = async(tkn) =>  {
    const response = await (requester.get('/tasks/5').set(tkn));
    token = response.body.token;
    return response;

    }

    const sendReqTasksByUser2 = async() =>  {
        const response = await (requester.get('/tasks/5').set(tokenUser));
        token = response.body.token;
        return response;
    }
        
    before(async()=> await sendReqTasksByUser2());
    beforeEach(async()=> await sendReqTasksByUser2());
    
    it('Retorna o status 200,quando a requisicao get for bem sucedida e valida o retorno das tasks do usuario!', async function () {
        const response = await sendReqTasksByUser(tokenUser);
                
    expect(response.statusCode).to.be.equal(200);
    expect(response.body).to.deep.equal(tasksUser);
    });

    it('Retorna o status 401 e mensagem, quando o token enviado no header nao e valido!', async function () {
        const response = await sendReqTasksByUser(tokenBadUser);

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.message).to.be.equal('jwt malformed');
    });

    it('Retorna o status 401 e mensagem, quando o token for ausente no header!', async function () {
        const response = await sendReqTasksByUser(notToken);

    expect(response.statusCode).to.be.equal(401);
    expect(response.body.error).to.be.equal('Token não encontrado');
    });

    


});

