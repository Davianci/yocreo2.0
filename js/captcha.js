grecaptcha.ready(function() {
grecaptcha.execute('6LcHuYEUAAAAAKwmTQFDqmxasilIH9Bhgx9GZ2Vj', {action: 'homepage'})
.then(function(token) {
document.getElementById('g-recaptcha-response').value=token;
});
});

