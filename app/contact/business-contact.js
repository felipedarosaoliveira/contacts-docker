const loadContactsByUser = (user,contactService,success,fail)=>{
    contactService.loadContactsByUser(user)
    .then(success)
    .catch(fail);
}

const findContactById = (user, contactId,contactService,success,fail)=>{
     contactService.findContactById(user,contactId)
     .then(success)
     .catch(fail);
 }

 const filterContacts = (user,contactService,success,fail)=>{
     contactService.loadContactsByUser(user)
     .then(success)
     .catch(fail);
 }

 const saveContact = (user, contact, contactService,success,fail)=>{
    console.log('contact on save', contact);
     contactService.save(user,contact)
     .then(success)
     .catch(fail);
 }

 const removeContact = (contactId, contactService,success,fail)=>{
     contactService.remove(contactId)
     .then(success)
     .catch(fail);
 }

module.exports = {
    loadContactsByUser,
    findContactById,
    filterContacts,
    saveContact,
    removeContact
}