document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

      
            window.location.href = 'dashboard.html';
        

        // Add your authentication logic here (e.g., check if username and password are valid).
        // You can use localStorage, a server, or other methods for authentication.
        
        // For demonstration, let's assume successful login:
       
    });
});

// Add event listeners to input elements
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('focus', (event) => {
        const label = event.target.previousElementSibling;
        label.style.top = '-10px';
        label.style.fontSize = '12px';
        label.style.color = '#007bff';
    });

    input.addEventListener('blur', (event) => {
        const label = event.target.previousElementSibling;
        if (event.target.value === '') {
            label.style.top = '10px';
            label.style.fontSize = '16px';
            label.style.color = '#ccc';
        }
    });
});

  
function togglePasswordVisiblity(){
    
    const passwordInput =  document.getElementById("password");
    const eyeicon =  document.querySelector("i");


    if(passwordInput.type==='password'){
        password.type='text';
        eyeicon.className='fa fa-eye';
    }else{
        password.type='password';
        eyeicon.className='fa fa-eye-slash'
    }
}

