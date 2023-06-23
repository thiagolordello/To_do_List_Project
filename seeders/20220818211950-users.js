module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'arthur',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'flavio',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'monique',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'lordello',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'joao',
        password: 'ec279cb8d71dd62859e481c6be01ac1a',
      },
      {
        name: 'victor',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'user.test',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      {
        name: 'taylor',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
