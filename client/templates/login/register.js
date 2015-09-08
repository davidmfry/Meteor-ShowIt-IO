Template.register.events({
    'submit .form-signup': function(event) {
        event.preventDefault();
        var firstName = trimInput(event.target.first_name.value);
        var lastName = trimInput(event.target.last_name.value);
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);

        if (isNotEmpty(email) &&
            isNotEmpty(password) &&
            isNotEmpty(firstName) &&
            isNotEmpty(lastName) &&
            isEmail(email) &&
            areValidPasswords(password, password2))
        {
            Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    first_name: firstName,
                    last_name: lastName
                }
            }, function(err){
                if(err) {
                    FlashMessages.sendError('There was an error with registration');
                }
                else
                {
                    FlashMessages.sendSuccess('Account Created! Your are now logged in');
                    Router.go('/dashboard');
                }
            });
        }

        // Prevent Submit
        return false;
    }
});


// Validation Rules

// Trim Helper
var trimInput = function(value) {
    return value.replace(/^\s*|\s*$/g, "");
}

// Check For Empty Fields
isNotEmpty = function(value) {
    // All fields are filled out
    if (value && value !== '')
    {
        return true;
    }
    FlashMessages.sendError("Please fill in all fields")
    return false;
}

// Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(value))
    {
        return true;
    }
    FlashMessages.sendError("Please use a valid email address");
    return false;
}

// Check Password Field
isValidPassword = function(password) {
    if(password.length < 6)
    {
        FlashMessages.sendError("Password must be at least 6 characters");
        return false
    }
    return true;
}

// Match Password
areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password))
    {
        return false;
    }

    if(password !== confirm)
    {
        FlashMessages.sendError("Password do not match");
        return false;
    }
    return true;
}