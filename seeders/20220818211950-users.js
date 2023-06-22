module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'arthur',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'flavio',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'monique',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'lordello',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'eu',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'benef',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'victor',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'belfort',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'patrick',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'jiraya',
        password: 'ec279cb8d71dd62859e481c6be01ac1a'
      },
      {
        name: 'joao',
        password: 'ec279cb8d71dd62859e481c6be01ac1a'
      },
      {
        name: 'jiraya',
        password: 'ec279cb8d71dd62859e481c6be01ac1a'
      },
      {
        name: 'lordello',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'lordello',
        password: '827ccb0eea8a706c4c34a16891f84e7b'
      },
      {
        name: 'lordello',
        password: '81dc9bdb52d04dc20036dbd8313ed055'
      },
      {
        name: 'lordello',
        password: '202cb962ac59075b964b07152d234b70'
      },
      {
        name: 'lordello',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'user.test',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'jiraya',
        password: 'd41d8cd98f00b204e9800998ecf8427e'
      },
      {
        name: 'ronaldinho',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'trybe',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'robson',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'taylor',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'usuario_teste8952667',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'usuario_teste7282831',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'jose',
        password: 'e10adc3949ba59abbe56e057f20f883e'
      },
      {
        name: 'usuario.teste',
        password: 'd41d8cd98f00b204e9800998ecf8427e'
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

