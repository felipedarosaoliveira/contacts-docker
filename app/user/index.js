
const controller = require('./controller-user');
const user = require('./user');

/*Routes */
let routes = [
    {
        path:'/login',
        method:'get',
        middleware:[controller.login]
    },{
        path:'/authenticate',
        method:'post',
        middleware:[controller.authenticate]
    },{
        path:'/logout',
        method:'get',
        middleware:[controller.logout]
    }
];


const configureRoutes = (configurator)=>{
    console.log(configurator);
    console.log(routes);
    configurator(routes);
}


/* Export module */
module.exports = {
    configureRoutes,
    model:user
}