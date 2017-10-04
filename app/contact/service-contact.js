const db = require('../../db/knex');
const q = require('q');

const loadContactsByUser = (user)=>{
    let deferred = q.defer();
    db.select().from('contacts').where('user_id',1)
    .then((contacts)=>{console.log('contatos',contacts);deferred.resolve(contacts)})
    .catch(()=>deffered.reject());
    return deferred.promise;
}

const findContactById = (user,contactId)=>{
    let deferred = q.defer();
    db.select().from('contacts')
    .where({
            user_id:user.id,
            id:contactId
        }
    )
    .then((contact)=>{console.log('find contact ',contact);deferred.resolve(contact)})
    .catch(()=>deffered.reject());
    return deferred.promise;
}

const save = (user,contact)=>{
    let deferred = q.defer();
    if(!contact.id){
        console.log('add new contact')
         db('contacts').insert(parseEntityToTable(contact,user))
         .then(()=>deferred.resolve())
         .catch((err)=>{console.log(err),deferred.reject()})
    }else{
        contact.updatedAt = new Date();
        db('contacts').update(parseEntityToTable(contact,user))
        .then(()=>deferred.resolve())
        .catch((err)=>{console.log(err),deferred.reject()})
    }
    
    return deferred.promise;
}

const remove = (contactId)=>{
    console.log('remove service contact', contactId)
    let deferred = q.defer();
    if(contactId){
        console.log('remove  contact')
        db.del().from('contacts')
        .where({
                id:contactId
            }
        ).then((e)=>{deferred.resolve(e)})
        .catch((e)=>{deferred.reject(e)})
    }else{
       deferred.reject('contact not defined');
    }
    
    return deferred.promise;
}

function  parseEntityToTable(contact,user){
    console.log('parseEntity owner is ',user);
    return {
        id:contact.id,
        name:contact.name,
        email:contact.email,
        telephone:contact.telephone,
        created_at:contact.createdAt,
        updated_at:contact.updatedAt,
        user_id:user.id
    }
}

module.exports = {
    loadContactsByUser,
    findContactById,
    save,
    remove
}