// Function to validate the mobile number (10 digits)
function mobile_check(event, num) {
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(num)) {
        document.getElementById('mobile-error').textContent = 'Please enter a valid 10-digit mobile number.';
        event.preventDefault();  // Prevent the form from submitting if the validation fails
        return false;
    }
    // If the number is valid, clear any previous error messages
    document.getElementById('mobile-error').textContent = '';
    return true;
}

// Function to validate the name (at least 4 characters)
function name_check(event, name) {
    if (name.length < 4) {
        document.getElementById('name-error').textContent = 'Please enter a name with a minimum of 4 characters.';
        event.preventDefault();  // Prevent the form from submitting if the validation fails
        return false;
    }
    // If the name is valid, clear the error message
    document.getElementById('name-error').textContent = '';
    return true;
}

// Main login function for form submission
function loginUser(event) {
    // Prevent the form from submitting until we validate the input
    event.preventDefault();

    // Get values from the form
    const na = document.getElementsByName('name')[0];
    const mob = document.getElementsByName('phone')[0];
    const pas = document.getElementsByName('password')[0];

    // Validate the inputs
    const isNameValid = name_check(event, na.value);
    const isPhoneValid = mobile_check(event, mob.value);

    // If either validation fails, prevent form submission
    if (!isNameValid || !isPhoneValid) {
        return false;  // Return false to prevent form submission
    }

    // After validation passes, store the data (if necessary, but DO NOT store sensitive info like passwords)
    localStorage.setItem('login', 'true');
    localStorage.setItem('username', na.value);  // Store the username if needed
    localStorage.setItem('mobile', mob.value);   // Store mobile (again, not recommended for sensitive data)
    
    // If the password must be used, ensure it is handled securely (not in localStorage).
    // For the sake of demonstration, we are storing it here, but **avoid this in real applications**.
    localStorage.setItem('password', pas.value);  // This is not recommended for real applications

    // You can now proceed with submitting the form or redirecting the user
    // Optionally, you can submit the form programmatically if validation passes
    // document.querySelector('form').submit();  // Uncomment to submit the form after validation
}
