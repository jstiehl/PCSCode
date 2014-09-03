var monthObj = {
	january:0,
	february:1,
	march:2,
	april:3,
	may:4,
	june:5,
	july:6,
	august:7,
	september:8,
	october:9,
	november:10,
	december:11
};

function AppointmentBook() {  
	this.appointments = [];
}

AppointmentBook.prototype.addApp = function (appointment) {
	this.appointments.push(appointment);
}

AppointmentBook.prototype.deleteApp = function  (appointment) {
	var appIndex;

	this.appointments.forEach(function (value, index){	
		if (value === appointment){
			appIndex = index;
		}

	});
	this.appointments.splice(appIndex,1);
}

AppointmentBook.prototype.reschedule = function (appointment, newTime) {

	this.appointments.forEach(function (value, index){	
		if (value === appointment){
			appointment.date = new Date(newTime)
		}

	});	

}

AppointmentBook.prototype.listAll = function() {
	return this.appointments;
}



AppointmentBook.prototype.listDate = function(apptDate){
	var gDate = new Date(apptDate);
	var dateList = [];
	this.appointments.forEach(function (value) {
		
		if(value.date.getTime() === gDate.getTime()){
			dateList.push(value);
		}
	});

	return dateList;
}

AppointmentBook.prototype.listRange = function(dateOne, dateTwo){

	var startDate = new Date(dateOne).getTime();
	var endDate = new Date(dateTwo).getTime();
	var rangeList = [];
	this.appointments.forEach(function(value) {
		if(value.date.getTime()>=startDate && value.date.getTime() <= endDate){
			rangeList.push(value);
		}
	});

	return rangeList;

}

AppointmentBook.prototype.listMonth = function(month){

	var monthLower = month.toLowerCase();
	var numMonth = monthObj[monthLower];
	var monthList = [];
	this.appointments.forEach(function(value){
		if(value.date.getMonth() === numMonth){
			monthList.push(value);
		}
	});
	return monthList;
}

module.exports = AppointmentBook;