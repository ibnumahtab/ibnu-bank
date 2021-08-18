// Login to Button Handler
document.getElementById('login-button').addEventListener('click', function() {
    // User Email Collect
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    
    // User Password Collect
    const passField = document.getElementById('password-field');
    const userPassword = passField.value;

    // Login Condition Setup
    if (userEmail == 'ibnu@bank.com' && userPassword == 'ibnu') {
        location.href = 'dashboard.html'; //Someone write window.location.href...
    } else {
        alert('Invalid User Name or Password!');
    }
});