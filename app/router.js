module.exports = function(router){

    const configurator = (routes)=>{
        console.log('configurator routes',routes);
        routes.forEach((route)=>{
            router[route.method](route.path,route.middleware);
        })
    }
    require('./user').configureRoutes(configurator);
    require('./contact').configureRoutes(configurator);
}