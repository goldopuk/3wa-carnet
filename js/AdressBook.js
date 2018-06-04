"user strict";


function getContactList() {
	var contactListJSON = localStorage.getItem('contactList');

	var contactList;

	if (contactListJSON === null) {
		contactList = [];
	} else {
		contactList = JSON.parse(contactListJSON);	
	}

	return contactList;
}


function saveContact(contact) {

	

	contactList.push(contact);

	contactListJSON = JSON.stringify(contactList);

	localstorage.setItem('contactList', contactListJSON);

	// ajouter le contact au localstorage
}

function displayContacts() {
	var contactListJSON = localStorage.getItem('contactList');

	var contactList;

	if (contactListJSON === null) {
		contactList = [];
	} else {
		contactList = JSON.parse(contactListJSON);	
	}

	var html = '';

	for (var i = 0; i < contactList.length; i++) {
		var contact = contactList[i];
		html += "<li>" + contact.firstname + " " + contact.lastname + "<li>";
	}


	$('.contact-list').html(html);	
}

function removeContact() {

}