const service = require('./service-contact');
const business = require('./business-contact');
const list = (req,resp)=>{
    const user = req.session.currentUser;
    const success = (contacts)=>{
        console.log('controller list contacts',contacts)
        resp.render('contact/list.html',{contatos:contacts});
    }
    const fail = (contacts)=>{
        resp.render('contact/list.html',{contatos:[]});
    }
    business.loadContactsByUser(user,service,success,fail);

}

const newContact = (req,resp)=>{
    
}

const edit = (req,resp)=>{
    
}
const save = (req,resp)=>{
    
}
const remove = (req,resp)=>{
    
}

module.exports = {
    list,
    newContact,
    edit,
    save,
    remove
}