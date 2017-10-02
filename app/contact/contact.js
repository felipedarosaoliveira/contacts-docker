class Contact{
    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.telephone = params.telephone;
        this.createdAt = params.createdAt;
        this.updatedAt = params.updatedAt;
    }
}

module.exports = Contact;