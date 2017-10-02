
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
  .then(function () {
    // Inserts seed entries
    return knex('contacts').insert([
      { name: 'João', email:'joão@teste.com', telephone:'988776655', user_id:'1'},
      { name: 'Maria', email:'maria@teste.com', telephone:'988776644', user_id:'1'},
      { name: 'Adão', email:'adao@teste.com', telephone:'988776633', user_id:'2'},
      { name: 'Eva', email:'eva@teste.com', telephone:'988776677', user_id:'2'},
    ]);
  });
};
