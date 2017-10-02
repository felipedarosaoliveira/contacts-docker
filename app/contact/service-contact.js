const db = require('../../db/knex');
const q = require('q');
const loadContactsByUser = (user)=>{
    let deferred = q.defer();
    db.select().from('contacts').where('user_id',1)
    .then((contacts)=>{console.log('contatos',contacts);deferred.resolve(contacts)})
    .catch(()=>deffered.reject());
    return deferred.promise;
}

module.exports = {
    loadContactsByUser
}