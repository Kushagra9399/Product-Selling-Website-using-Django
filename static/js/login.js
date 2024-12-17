// Assuming the login process is successful (e.g., password check)
function loginUser() {
    // Your authentication logic goes here
    const na = document.getElementsById('name').value;
    const mob = document.getElementsById('phone').value;
    const pas = document.getElementsById('password').value;

    // Check if any field is empty
    if (!na || !mob || !pas) {
        alert("Please fill all fields.");
        return;  // Stop further execution
    };
    // If login is successful, set the login status
    
    localStorage.setItem('login', 'true');
    localStorage.setItem('username', na.value);  // Optionally store the username
    localStorage.setItem('mobile',mob.value);
    localStorage.setItem('password', pas.value);
    window.location.href = '/';  // Redirect to the homepage or dashboard
}
