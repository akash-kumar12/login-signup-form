function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
    document.addEventListener('DOMContentLoaded', function() {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginSubmit = document.getElementById('loginSubmit');
        const registerSubmit = document.getElementById('registerSubmit');
    
        loginBtn.addEventListener('click', function() {
            login();
        });
    
        registerBtn.addEventListener('click', function() {
            register();
        });
    
        loginSubmit.addEventListener('click', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
    
            // Perform validation
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
    
            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.');
                return;
            }
    
            // Perform login logic here
    
            // Simulating successful login with a popup message
            alert('Login successful!');
        });
    
        registerSubmit.addEventListener('click', function(event) {
            event.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
    
            // Perform validation
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
    
            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.');
                return;
            }
    
            // Perform registration logic here
    
            // Simulating successful registration with a popup message
            alert('Registration successful!');
        });
    
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    
        function validatePassword(password) {
            // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number
            const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(password);
        }
    });
    