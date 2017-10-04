const service = require('./service-contact');
const business = require('./business-contact');
const Contact = require('./contact');
const list = (req,resp)=>{
    const user = req.session.currentUser;
    const success = (contacts)=>{

        resp.render('contact/list.html',{contacts,messageParam: resp.locals.flash && resp.locals.flash.message });
    }
    const fail = (contacts)=>{
        resp.render('contact/list.html',{contacts:[]});
    }
    business.loadContactsByUser(user,service,success,fail);

}

const newContact = (req,resp)=>{
    resp.render('contact/form.html',{contact:resp.locals.flash && resp.locals.flash.param,messageParam: resp.locals.flash && resp.locals.flash.message });
    
}

const edit = (req,resp)=>{
     let contactId = req.query.id;
     const user = req.session.currentUser;
     const success = (contact)=>{
        console.log('edit contact ',contact)
        resp.render('contact/form.html',{contact:contact[0]});
    }
    const fail = (contacts)=>{
        res.status(400).send('Bad Request');
    }

    business.findContactById(user,contactId,service,success,fail);
    
}
const save = (req,resp)=>{
    const user = req.session.currentUser;
    const contact = new Contact(req.body);
    console.log('contact', contact);
    const success = (contact)=>{
        req.session.flash = {
            message:{
                type:'success',
                message:'Contact Saved'
            }
           
        } 
        resp.redirect('/contacts/list');
    }
    const fail = (errorMessage)=>{
        console.log('fail on save ',contact);
        req.session.flash = {
            message:{
                type:'error',
                message:'Fail on save contact'
            },
            param:contact
           
        } 
        if(contact.id){
            resp.redirect('/contacts/edit?id='+contact.id)
        }  else{
            resp.redirect('/contacts/new')
        } 
        
    }

    business.saveContact(user,contact,service,success,fail);
    
}
const remove = (req,resp)=>{
    let contactId = req.query.id;
    const user = req.session.currentUser;
    const success = ()=>{
        console.log('success remove');
        req.session.flash = {
            message:{
                type:'success',
                message:'Contact removed'
            }
           
        } 
       resp.redirect('/contacts/list');
   }
   const fail = (message)=>{
    console.log('fail remove');
       res.status(400).send('Bad Request');
   }

   business.removeContact(contactId,service,success,fail);
    
}

module.exports = {
    list,
    newContact,
    edit,
    save,
    remove
}