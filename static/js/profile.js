// This script will be executed once the DOM is fully loaded

window.onload = function() {
    // Retrieve the 'username' from localStorage
    const username = localStorage.getItem('username');

    // Set the content of the <p> element with id="name"
    if (username) {
        document.getElementById('name').textContent = username;
    } else {
        // If there is no 'username' in localStorage, you can provide a default message
        document.getElementById('name').textContent = 'Guest';
    }
};
