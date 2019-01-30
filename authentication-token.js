'use strict';

async function authenticate(request, token) {
	try {
        let isValid = false;
        const validToken = 'thisIsTheUniqueValidTokenAuthentication';
		if (token === validToken) {
            isValid = true;
			const credentials = {
                firstName: 'Elon',
                lastName: 'Musk',
                nationality: 'South African'
            };
			return { isValid, credentials };
		}
	} catch (error) {
		/* eslint-disable no-console */
		console.log(`Error to validate token ${error}`);
	}
	return { isValid: false, credentials: {} };
}

module.exports = authenticate;
