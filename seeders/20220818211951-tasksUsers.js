module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('tasks_user', [
      {
        id_user: 5,
        description: 'refazer o back end',
        status: 'concluido',
        created_at: '2022-11-07 14:08:21',
      },
      {
        id_user: 5,
        description: 'refazer o front-end',
        status: 'concluido',
        created_at: '2022-11-07 14:08:44',
      },
      {
        id_user: 5,
        description: 'Falar com o Victor',
        status: 'pendente',
        created_at: '2022-11-07 19:34:52',
      },
      {
        id_user: 5,
        description: 'desenvolver os testes',
        status: 'pendente',
        created_at: '2022-12-29 14:08:14',
      },
      {
        id_user: 67,
        description: 'desenvolver APPS',
        status: 'pendente',
        created_at: '2023-01-31 15:01:44',
      },
      {
        id_user: 67,
        description: 'desenvolver testes',
        status: 'pendente',
        created_at: '2023-01-31 15:01:55',
      },
      {
        id_user: 12,
        description: 'Estudar React Native',
        status: 'concluido',
        created_at: '2023-05-02 20:20:02',
      },
      {
        id_user: 12,
        description: 'Estudar Python',
        status: 'pendente',
        created_at: '2023-05-02 20:20:14',
      },
      {
        id_user: 67,
        description: 'desenvolver APPS',
        status: 'pendente',
        created_at: '2023-06-21 17:09:16',
      },
      {
        id_user: 4,
        description: 'Correr de manha',
        status: 'pendente',
        created_at: '2023-06-21 19:00:57',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('tasks_user', null, {});
  },
};
