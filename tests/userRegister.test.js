// const chai = require('chai');
// const { expect } = require('chai');

// const chaiHttp = require('chai-http');
// const app = require('../app');
// // const { response } = require('../app');

// chai.use(chaiHttp);
// const requester = chai.request(app).keepOpen();

// const min = 0;
// const max = 10000000;
// let sort_num = Math.floor(Math.random() * max -min);
// let aleatoryName = `usuario_teste${sort_num}`

// const newUser = {
//     name: `${aleatoryName}`,
//     password: "123456" ,
// };

// const notNameUser = {
//     name: "",
//     password: "123456",
// };

// const notPasswdUser = {
//     name: "usuario.teste",
//     password: "" ,
// };

// const notDataUserTask = {
//     name: "",
//     password: "" ,
  
// };

// const nullDataUsrTask = {};

// describe('Testes POST da rota tasks register/ (Create User)', (done) => {
//   let token;

//   const sendNewUser = async () => {
//     const response = await (requester.post('/register/').send(newUser));
//     return response;
//   };

 
//   const postUserWithouthName = async () => {
//     const response = await requester.post('/register/').send(notNameUser);
//     return response;
//   };

//   const postUserWithouthPass = async () => {
//     const response = await requester.post('/register/').send(notPasswdUser);
//     return response;
//   };

//   const postUserWithouthData = async () => {
//     const response = await requester.post('/register/').send(notDataUserTask);
//     return response;
//   };

//   const postUserNotUserAndPass = async () => {
//     const response = await requester.post('/register/').send(nullDataUsrTask);
//     return response;
//   };

//   // before(async () => await sendNewUser());
//   // beforeEach(async () => await sendNewUser());

//   it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
//     const response = await sendNewUser();
//     expect(response.statusCode).to.be.equal(201);
//   });
 
//   before(async () => await postUserWithouthName());
//   it('Quando somente a senha for informada, retorna uma mensagem de erro e o status 400', async () => {
//     const response = await postUserWithouthName();
//     expect(response.statusCode).to.be.equal(400);
//     expect(response.body.error).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
//   });

  

//   it('Quando somente o nome for informado, retorna uma mensagem de erro e o status 400', async () => {
//     const response = await postUserWithouthPass();
//     expect(response.statusCode).to.be.equal(400);
//     expect(response.body.error).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
//   });


//   it('Quando o usuario e a senha foram informados sem dados dentro (""), retorna uma mensagem e o status 400', async () => {
//     const response = await postUserWithouthData();

//     expect(response.statusCode).to.be.equal(400);
//     expect(response.body.error).to.be.equal('Usuario e senha nao informados na criacao de usuario');
//   });

//   it('Quando o usuario e a senha nao foram informados no json, retorna uma mensagem e o status 500', async () => {
//     const response = await postUserNotUserAndPass();

//     expect(response.statusCode).to.be.equal(500);
//     expect(response.body.message).to.be.equal('Illegal argument undefined');
//   });

// });

const Mocha = require('mocha');

const mocha = new Mocha();
// const { describe, it } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = require('chai');
const axios = require('axios');

const chaiHttp = require('chai-http');
const app = require('../app');
// const { response } = require('../app');

chai.use(chaiHttp);
const requester = chai.request(app).keepOpen();

const notNameUser = {
  name: '',
  password: '123456',
};

const notPasswdUser = {
  name: 'usuario.teste',
  password: '',
};

const notDataUserTask = {
  name: '',
  password: '',

};

const nullDataUsrTask = {};

describe('Testes POST da rota tasks register/ (Create User)', async () => {
  // let token;

  // const sendNewUser = async () => {
  //   const response = await (await requester.post('/register/').send(newUser));
  //   return response;
  // };

  const postUserWithouthName = async () => {
    const response = await requester.post('/register/').send(notNameUser);
    return response;
  };

  const postUserWithouthPass = async () => {
    const response = await requester.post('/register/').send(notPasswdUser);
    return response;
  };

  const postUserWithouthData = async () => {
    const response = await requester.post('/register/').send(notDataUserTask);
    return response;
  };


  //  *** Outra forma de fazer fazendo o post usando uma real requisicao na base. Neste caso ha uma insercao no banco.
  // ao contrario da forma usando o stub ***  
  // before(async () => await sendTask());
  // beforeEach(async () => await sendNewUser());

  // it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
  //   const response = await sendNewUser();
  //   expect(response.statusCode).to.be.equal(201);
  // });


  const responseData = {
    id: 5,
    name: 'tester',
    password: 'ec279cb8d71dd62859e481c6be01ac1a',
  };

  it('Retorna o status 201,quando a criacao for bem sucedida!', async () => {
    const postStub = await sinon.stub(axios, 'post');

    const url = 'http://localhost:3001/register/';

    const payload = {
      name: 'usuario.teste',
      password: '123456',
    };

    const newUser = {
      name: 'usuario.teste',
      password: '123456',
    };
    await postStub.withArgs(url, newUser).returns(Promise
      .resolve({ data: responseData, status: 201 }));

    const response = await axios.post(url, payload);

    expect(response.status).to.be.equal(201);
    expect(response.data).to.deep.equal(responseData);

    postStub.restore();
  });

  it('Quando somente a senha for informada, retorna uma mensagem de erro e o status 400', async () => {
    const response = await postUserWithouthName();
    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
  });

  it('Quando somente o nome for informado, retorna uma mensagem de erro e o status 400', async () => {
    const response = await postUserWithouthPass();

    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Usuario ou senha nao informados na criacao de usuario');
  });

  it('Quando o usuario e a senha nao foram informados, retorna uma mensagem e o status 400', async () => {
    const response = await postUserWithouthData();

    expect(response.statusCode).to.be.equal(400);
    expect(response.body.error).to.be.equal('Usuario e senha nao informados na criacao de usuario');
  });
});
