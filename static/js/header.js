window.onload = function() {
    // Check if login cookie is set
    const loggedin = localStorage.getItem('login')
    if (loggedin === 'true') {
        // User is logged in
        document.getElementById('login').style.display = 'none';  // Hide login button
        document.getElementById('signin').style.display = 'none';
        document.getElementById('profile').style.display = 'block'; // Show logout button
        document.getElementById('logout').style.display = 'block'; // Show logout button
        
        // Extract username from cookie
        const username = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}`;
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
    document.cookie = "login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";  // Expire login cookie
    document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";  // Expire username cookie
    localStorage.setItem('login', null);
    localStorage.setItem('username',null);
    localStorage.setItem('mobile', null);
    localStorage.setItem('password',null);
    window.location.href = '/';  // Redirect to login page
}