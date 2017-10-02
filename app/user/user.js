class User{
    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.password = params.password;
        this.createdAt = params.createdAt;
        this.updatedAt = params.updatedAt;
    }
}

module.exports = User;