const Employee = require (`../Lib/Employee`)
class Engineer extends Employee {
    constructor(name, id , email, github){
        super(name,id,email);

       if (typeof github !== "string" || !github.trim().length){
           throw new Error("")
       }
       this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;