const authenticator = (credentials,authenticationService,success,fail)=>{
    
   return authenticationService.authenticate(credentials)
    .then(success)
    .catch(fail);

}


module.exports = {
    authenticator
}