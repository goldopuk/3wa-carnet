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

	var contactList = getContactList();

	contactList.push(contact);

	contactListJSON = JSON.stringify(contactList);

	localstorage.setItem('contactList', contactListJSON);

	// ajouter le contact au localstorage
}



function displayContacts() {
	
	var contactList = getContactList();

	var html = '';

	for (var i = 0; i < contactList.length; i++) {
		var contact = contactList[i];
		html += '<li data-id="' + i + '">' + contact.firstname + " " + contact.lastname + "<li>";
	}


	$('.contact-list').html(html);

	$('.contact-list li').on('click' , function () {
		var contactId = $(this).attr('data-id');	
		displayContact(contactId);
	});
}

function displayContact(contactId) {
	var contactList = getContactList();

	var contact = contactList[contactId];
	console.log(contact);

	$('.contact-details h2').html(contact.firstname + "" + contact.lastname);
	$('.contact-details .phone').html(contact.phone);
}