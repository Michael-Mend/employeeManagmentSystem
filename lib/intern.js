const Employee = require (`../Lib/Employee`)
class Intern extends Employee {
    constructor(name, id , email, school){
        super(name,id,email);

       if (typeof school !== "string" || !school.trim().length){
           throw new Error("")
       }
       this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;