// Assuming the login process is successful (e.g., password check)
function loginUser() {
    // Your authentication logic goes here
    const na = document.getElementsByName('name')[0];
    const mob = document.getElementsByName('phone')[0];
    const pas = document.getElementsByName('password')[0];

    // Check if any field is empty
    if (!na.value.trim() || !mob.value.trim() || !pas.value.trim()) {
        alert("Please fill all fields.");
        return;  // Stop further execution
    };
    // If login is successful, set the login status
    localStorage.setItem('login', 'true');
    localStorage.setItem('username', na);  // Optionally store the username
    localStorage.setItem('mobile',mob);
    window.location.href = '/';  // Redirect to the homepage or dashboard
}
