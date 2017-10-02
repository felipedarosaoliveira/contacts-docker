
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {name: 'felipe',email:'felipe@teste.com',password:'123'},
      {name: 'bagrinho',email:'b@teste.com',password:'bbb'}
      
    ]);
  });
};
