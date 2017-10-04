let express = require('express')
let bodyParser = require('body-parser');
let session = require('express-session');
let helmet = require('helmet');
let csurf = require('csurf');
let multer = require('multer');
let nunjucks = require( 'nunjucks' ) ;


let port = process.env.PORT || 3000;
let app = express();
//configurations
app.use(session({
    secret: 'secret for docker app',
    resave: true,
    saveUninitialized: true,
    
  }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
nunjucks.configure('./app/views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');
app.use(express.static('public'))

function isPublicRoute(path){
    let result = path == '/login' || path == '/authenticate'  || path.indexOf('/resources/') == 0; 
   return result;
}

app.use(function(req,res,next){
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();

})
app.all('*',(req,resp,next)=>{
    console.log('request for ',req.path)
    if(req.session.currentUser || isPublicRoute(req.path)){
        next();
    }else {
        resp.redirect('/login');
    }

})

/* Load routes */
require('./app/router')(app);

/* start server */
app.listen(port,function(){
    console.log('listening on port: '+port);
})