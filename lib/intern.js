const Employee = require('./Employee');

class Intern extends Employee {
	constructor(id, name, email, school) {
		super(id, name, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact