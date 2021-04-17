const Employee = require('..lib/employee');

class Manager extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        return Intern;
    }
    getInternSchool() {
        return this.school;
    }
}

module.exports = Intern;