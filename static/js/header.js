window.onload = function() {
    // Check if login cookie is set
    const loggedin = localStorage.getItem('login');
    if (loggedin === 'true') {
        // User is logged in
        document.getElementById('login').style.display = 'none';  // Hide login button
        document.getElementById('signin').style.display = 'none';
        document.getElementById('profile').style.display = 'block'; // Show logout button
        document.getElementById('logout').style.display = 'block'; // Show logout button
        
    } else {
        // User is not logged in
        document.getElementById('login').style.display = 'block';  // Show login button
        document.getElementById('signin').style.display = 'block';
        document.getElementById('profile').style.display = 'none'; // Hide logout button
        document.getElementById('logout').style.display = 'none'; // Show logout button
    }
};

// Logout function to clear cookies
function logoutUser() {
    localStorage.setItem('login', null);
    localStorage.setItem('username',null);
    localStorage.setItem('mobile', null);
    localStorage.setItem('password',null);
    window.location.href = 'login.html';  // Redirect to login page
}