const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const notMatch = document.getElementById('no-match');

if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add('error'); 
    notMatch.classList.remove('inactive');  
}