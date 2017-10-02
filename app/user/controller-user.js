const business = require('./business-user');
const service = require('./service-user');

const login = (req,resp)=>{
    console.log('session', req.session);
    let params = {
        credentials:req.session.credentials,
        errorMessage:req.session.errorMessage
    }
    console.log('login params', params)
    resp.render('user/login.html',params);
}

const authenticate = (req,resp)=>{
    const credentials = {
        login:req.body.login,
        password: req.body.password
    }

    function sucess (user){
        console.log('sucess ...')
        req.session.currentUser = user;
        req.session.credentials = null;
        req.session.errorMessage = null;
        resp.redirect('/contacts/list');
    }
    function fail (errorMessage){
        console.log('fail ...')
        console.log('credentials',credentials)
        req.session.credentials = credentials;
        console.log('session credentials',req.session.credentials)
        req.session.errorMessage = errorMessage;
        resp.redirect('/login');
    }
    //fail(credentials,'teste');

    business.authenticator(credentials,service,sucess,fail);


}

module.exports = {
    authenticate,
    login
}