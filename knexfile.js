module.exports = {
development:{
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'appdocker_dev'
    },
    migrations:{
        directory: __dirname+'/db/migrations'
    },
    seeds:{
        directory: __dirname+'/db/seeds'
    }
},
production:{
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'appdocker_production'
    },
    migrations:{
        directory: __dirname+'/db/migrations'
    },
    seeds:{
        directory: __dirname+'/db/seeds'
    }

}

}