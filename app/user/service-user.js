const db = require('../../db/knex');
const q = require('q');
const authenticate = (crecentials)=>{
    let deferred = q.defer();
    console.log('call authenticate into service')
    setTimeout(()=>{console.log('reject authentication');deferred.resolve({name:'b',email:'b@teste.com'});},500)
    console.log('return promise')
    return deferred.promise;
}

module.exports = {
    authenticate
}