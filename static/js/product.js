function order() {
    const login = localStorage.getItem('login');
    if (login === 'true') {
        window.location.href = '/product/order';
    } else {
        alert("Please Login First.")
    }
}