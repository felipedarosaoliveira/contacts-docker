const business = require('./business-user');
const service = require('./service-user');

const login = (req,resp)=>{
    console.log('session', req.session);
    let params = {
        credentials:req.session.credentials,
        errorMessage:req.session.errorMessage
    }
    resp.render('user/login.html',params);
}

const authenticate = (req,resp)=>{
    const credentials = {
        login:req.body.login,
        password: req.body.password
    }

    function sucess (user){
        req.session.currentUser = user;
        req.session.credentials = null;
        req.session.errorMessage = null;
        resp.redirect('/contacts/list');
    }
    function fail (errorMessage){
        console.log('credentials',credentials)
        req.session.credentials = credentials;
        console.log('session credentials',req.session.credentials)
        req.session.errorMessage = errorMessage;
        resp.redirect('/login');
    }
    //fail(credentials,'teste');

    business.authenticator(credentials,service,sucess,fail);


}

const logout = (req,resp)=>{
    req.session.destroy();
    resp.redirect('/login');
}

module.exports = {
    authenticate,
    login,
    logout
}