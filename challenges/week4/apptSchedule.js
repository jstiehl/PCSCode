function Appointment (description, location, date, attendees){
	if(!(this instanceof Appointment)){
        return new Appointment();
	}

	this.description = description;
	this.location = location;
	this.date = new Date(date);
	this.attendees = attendees;
}

module.exports = Appointment;