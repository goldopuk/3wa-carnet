
$('.btn-show-contact-form').on('click', function () {

	$('.form-contact').toggle();
	AddressBook.hideContact();
});


$('.btn-save-contact').on('click', function () {
	// enregistrement
	// donnees du formulaire

	var contact = {};

	contact.firstname = $('#firstname').val();
	contact.lastname = $('#lastname').val();
	contact.phone = $('#phone').val();
	contact.title = $('#title').val();

	console.log(contact);

	AddressBook.saveContact(contact);

	AddressBook.displayContactList();


	// save du contact
});


$('.btn-remove-contacts').on('click', function () {


	if ($('li.selected').length == 1) {
		// remove one contact

		var contactId = $('li.selected').attr('data-id');

		console.log('>>>>>', contactId);

		AddressBook.removeContactById(contactId);	

	} else {
		AddressBook.clearList();

	}

	AddressBook.displayContactList();
	AddressBook.hideContact();
});


AddressBook.displayContactList();