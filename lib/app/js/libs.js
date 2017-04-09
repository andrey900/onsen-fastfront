function User(obj){
	this.name = obj.firstName;
	this.last = obj.lastName;
	this.company = obj.company;
	this.phone = obj.phone;
	this.email = obj.email;
}

function errorMessage(response){
	console.log(response);
	ons.notification.alert('ERROR: no get data');
}