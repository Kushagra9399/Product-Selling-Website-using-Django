// This script will be executed once the DOM is fully loaded

window.onload = function() {
    // Retrieve the 'username' from localStorage
    const username = localStorage.getItem('username');
    const mob = localStorage.getItem('mobile');
    // Set the content of the <p> element with id="name"
    if (username) {
        document.getElementById('name').textContent = username;
    }
    document.getElementById('mobile').textContent = mob;
};
