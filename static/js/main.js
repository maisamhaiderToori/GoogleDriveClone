function togglePasswordVisibility() {
    const passwordFields = document.querySelectorAll("input[type='password']");
    passwordFields.forEach(field => {
        field.type = field.type === 'password' ? 'text' : 'password';
    });
}
