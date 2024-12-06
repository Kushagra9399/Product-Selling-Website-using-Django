function sendOTP() {
    var phoneNumber = document.getElementById("otp").value;

    // Validate phone number (basic validation, you can add more rules)
    if (!phoneNumber) {
        alert("Please enter your phone number.");
        return;
    }

    // Make an AJAX request to your server to send the OTP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send-otp.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("OTP sent to your phone number.");
        }
    };
    xhr.send("phone=" + phoneNumber);
}