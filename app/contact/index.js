
const controller = require('./controller-contact');
const contact = require('./contact');

/*Routes */
let routes = [
    {
        path:'/contacts/list',
        method:'get',
        middleware:[controller.list]
    },{
        path:'/contacts/new',
        method:'get',
        middleware:[controller.newContact]
    },{
        path:'/contacts/edit',
        method:'get',
        middleware:[controller.edit]
    },{
        path:'/contacts/save',
        method:'post',
        middleware:[controller.save]
    },{
        path:'/contacts/remove',
        method:'get',
        middleware:[controller.remove]
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
    model:contact
}