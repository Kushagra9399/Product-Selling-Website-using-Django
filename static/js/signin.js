function password_check(event) {
    var pas = document.getElementById('password').value;
    var con_pas = document.getElementById('con_password').value;
    if (pas !== con_pas){
        document.getElementById("password-error").textContent='Confirm Password is different.';
        event.preventDefault();
        return false;
    }
    document.getElementById("password-error").textContent='';
    return true;
}

function mobile_check(event){
    let num = document.getElementById('mobile').value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(num)) {
        document.getElementById('mobile-error').textContent = 'Please enter a valid 10-digit mobile number.';
        event.preventDefault();
        return false;
    }
    // If the number is valid, clear any previous error messages
    document.getElementById('mobile-error').textContent = '';
    return true;
}

function name_check(event){
    let name = document.getElementById("name").value;
    if (name.length < 4) {
        document.getElementById('name-error').textContent = 'Please enter a name with a minimum of 4 characters.';
        event.preventDefault(); // Prevent form submission
        return false;
    }
    // If the name is valid, clear the error message
    document.getElementById('name-error').textContent = '';
    return true;
}

function check_all(event){
    name_check(event);
    mobile_check(event);
    password_check(event);
}