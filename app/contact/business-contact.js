const loadContactsByUser = (user,contactService,success,fail)=>{
   return contactService.loadContactsByUser(user)
    .then(success)
    .catch(fail);

}


module.exports = {
    loadContactsByUser
}