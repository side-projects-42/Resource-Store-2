var ContactError = require('cordova/plugin/ContactError'),
    utils = require('cordova/utils'),
    ContactUtils = require('cordova/plugin/java/ContactUtils');

module.exports = {
    /**
     * Returns an array of Contacts matching the search criteria.
     *
     * @return array of Contacts matching search criteria
     */
    find : function(fields, success, fail, options) {
        // Success callback is required. Throw exception if not specified.
        if (typeof success !== 'function') {
            throw new TypeError(
                    "You must specify a success callback for the find command.");
        }

        // Search qualifier is required and cannot be empty.
        if (!fields || !(utils.isArray(fields)) || fields.length === 0) {
            if (typeof fail == 'function') {
                fail(new ContactError(ContactError.INVALID_ARGUMENT_ERROR));
            }
            return;
        }

        // default is to return a single contact match
        var numContacts = 1;

        // search options
        var filter = null;
        if (options) {
            // return multiple objects?
            if (options.multiple === true) {
                // -1 on BlackBerry will return all contact matches.
                numContacts = -1;
            }
            filter = options.filter;
        }

        // build the filter expression to use in find operation
        var filterExpression = ContactUtils.buildFilterExpression(fields, filter);

        // find matching contacts
        // Note: the filter expression can be null here, in which case, the find
        // won't filter
        var bbContacts = blackberry.pim.Contact.find(filterExpression, null, numContacts);

        // convert to Contact from blackberry.pim.Contact
        var contacts = [];
        for (var i = 0; i < bbContacts.length; i++) {
            if (bbContacts[i]) {
                // W3C Contacts API specification states that only the fields
                // in the search filter should be returned, so we create
                // a new Contact object, copying only the fields specified
                contacts.push(ContactUtils.createContact(bbContacts[i], fields));
            }
        }

        // return results
        success(contacts);
    }

};
