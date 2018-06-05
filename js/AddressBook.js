"user strict";

console.log('AddressBook chargé');


var AddressBook = {};

AddressBook.getContactList =  function () {
	var contactListJSON = localStorage.getItem('contactList');

	var contactList;

	if (contactListJSON === null) {
		contactList = [];
	} else {
		contactList = JSON.parse(contactListJSON);	
	}

	return contactList;
}

AddressBook.saveContactList =  function (contactList) {
	var contactListJSON = JSON.stringify(contactList);

	localStorage.setItem('contactList', contactListJSON);
}

AddressBook.getContactById =  function (contactId) {
	var contactList = this.getContactList();

	var contact = contactList[contactId];

	return contact;
}

AddressBook.removeContactById =  function (contactId) {
	var contactList = this.getContactList();

	contactList.splice(contactId, 1);

	this.saveContactList(contactList);
}

AddressBook.clearList = function () {
	localStorage.removeItem('contactList');
}


AddressBook.saveContact = function (contact) {

	var contactList = this.getContactList();

	contactList.push(contact);

	this.saveContactList(contactList);
}



AddressBook.displayContactList = function () {
	
	var contactList = this.getContactList();



	var html = '';

	for (var i = 0; i < contactList.length; i++) {
		var contact = contactList[i];
		html += '<li data-id="' + i + '">' + contact.firstname + " " + contact.lastname + "</li>";
	}

	$('.contact-list').html(html);

	

	$('.contact-list li').on('click' , function () {
		console.log('click' ,this);
		//
		var contactId = $(this).attr('data-id');	
		console.log(contactId);


		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			AddressBook.hideContactForm();	
			
		} else {
			$('.contact-list li').removeClass('selected');
			$(this).addClass('selected');
			AddressBook.displayContact(contactId);	
		}
	});
}

AddressBook.displayContact = function (contactId) {

	var contact = this.getContactById(contactId);

	
	console.log(contact);

	$('.contact-details h2').html(contact.firstname + " " + contact.lastname);
	$('.contact-details .phone').html(contact.phone);
	$('.contact-details').show();

	AddressBook.hideContactForm();
}

AddressBook.hideContact = function (contactId) {
	$('.contact-details').hide();
}

AddressBook.hideContactForm = function (contactId) {
	$('.form-contact').hide();
}