// document.addEventListener('DOMContentLoaded', () => {

//     // SCROLL TO TOP BUTTON
//     const scrollBtn = document.getElementById("scrollToTop");
//     if (scrollBtn) {
//         window.addEventListener("scroll", () => {
//             scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
//         });
//         scrollBtn.addEventListener("click", () => {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//         });
//     }

//     // Burger Bar 
//     const burger = document.getElementById('burger');
//     const navMenu = document.getElementById('navMenu');
//     burger?.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//     });

//     // COOKIE NOTIFICATION
//     const cookieBanner = document.getElementById('cookieNotification');
//     const acceptBtn = document.getElementById('acceptCookies');
//     if (cookieBanner && acceptBtn) {
//         if (sessionStorage.getItem('cookiesAccepted') === 'true') {
//             cookieBanner.style.display = 'none';
//         } else {
//             cookieBanner.style.display = 'flex';
//         }
//         acceptBtn.addEventListener('click', () => {
//             sessionStorage.setItem('cookiesAccepted', 'true');
//             cookieBanner.style.display = 'none';
//         });
//     }

//     // ===== FORM REGISTRATION =====
//     const form = document.getElementById('form');
//     if (!form) return;

//     const username = document.getElementById('username');
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const password2 = document.getElementById('password2');

//     // Load saved user
//     const savedUser = localStorage.getItem('registeredUser');
//     if (savedUser) {
//         const user = JSON.parse(savedUser);
//         username.value = user.username || '';
//         email.value = user.email || '';
//     }

//     // PASSWORD TOGGLE
//     function createPasswordToggle(input) {
//         const toggle = document.createElement('i');
//         toggle.className = 'fas fa-eye password-toggle';
//         toggle.addEventListener('click', () => {
//             input.type = input.type === 'password' ? 'text' : 'password';
//             toggle.className = input.type === 'password'
//                 ? 'fas fa-eye password-toggle'
//                 : 'fas fa-eye-slash password-toggle';
//         });
//         input.parentElement.appendChild(toggle);
//     }
//     createPasswordToggle(password);
//     createPasswordToggle(password2);

//     // SHOW ERROR/SUCCESS
//     function showError(input, message) {
//         const formControl = input.parentElement;
//         formControl.className = 'form-control error';
//         formControl.querySelector('small').innerText = message;
//     }

//     function showSucces(input) {
//         const formControl = input.parentElement;
//         formControl.className = 'form-control success';
//     }

//     // CHECK EMAIL VALID
//     function checkEmail(input) {
//         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (re.test(input.value.trim())) {
//             showSucces(input);
//         } else {
//             showError(input, 'Email is not valid');
//         }
//     }

//     // CHECK REQUIRED FIELDS
//     function checkRequired(inputs) {
//         inputs.forEach(input => {
//             if (input.value.trim() === '') {
//                 showError(input, `${getFieldName(input)} is required`);
//             } else {
//                 showSucces(input);
//             }
//         });
//     }

//     // CHECK LENGTH
//     function checkLength(input, min, max) {
//         if (input.value.length < min) {
//             showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//         } else if (input.value.length > max) {
//             showError(input, `${getFieldName(input)} must be less than ${max} characters`);
//         } else {
//             showSucces(input);
//         }
//     }

//     // GET FIELD NAME
//     function getFieldName(input) {
//         return input.id.charAt(0).toUpperCase() + input.id.slice(1);
//     }

//     // CHECK PASSWORD MATCH
//     function checkPasswordMatch(input1, input2) {
//         if (input1.value !== input2.value) {
//             showError(input2, 'Passwords do not match');
//         }
//     }

// // Reset form styles
// function resetFormStyles(form) {
//     const formControls = form.querySelectorAll('.form-control');
//     formControls.forEach(control => {
//         control.className = 'form-control'; 
//         const small = control.querySelector('small');
//         if (small) small.innerText = '';
//     });
// }

// // FORM SUBMIT
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Clear previous styles first
//     resetFormStyles(form);

//     checkRequired([username, email, password, password2]);
//     checkLength(username, 3, 20);
//     checkLength(password, 8, 25);
//     checkEmail(email);
//     checkPasswordMatch(password, password2);

//     // Save to localStorage if all valid
//     const allValid = form.querySelectorAll('.form-control.error').length === 0;
//     if (allValid) {
//         localStorage.setItem('registeredUser', JSON.stringify({
//             username: username.value.trim(),
//             email: email.value.trim()
//         }));
//         alert('Registration completed successfully!');
//         form.reset();
//         resetFormStyles(form); 
//     }
// });

//     // RANDOM USER AUTOFILL
//     document.getElementById('fillBtn')?.addEventListener('click', async () => {
//         try {
//             const res = await fetch('https://randomuser.me/api/');
//             const { results: [user] } = await res.json();

//             username.value = user.login.username;
//             email.value = user.email;

//             const pwd = (user.login.password + 'A1').padEnd(8, 'X');
//             password.value = password2.value = pwd;

//             // Trigger validation
//             checkRequired([username, email, password, password2]);
//             checkLength(username, 3, 20);
//             checkLength(password, 8, 25);
//             checkEmail(email);
//             checkPasswordMatch(password, password2);

//         } catch (err) {
//             console.error('Random user error', err);
//         }
//     });

// });


document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById("scrollToTop");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');
    burger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const cookieBanner = document.getElementById('cookieNotification');
    const acceptBtn = document.getElementById('acceptCookies');
    if (cookieBanner && acceptBtn) {
        if (sessionStorage.getItem('cookiesAccepted') === 'true') {
            cookieBanner.style.display = 'none';
        } else {
            cookieBanner.style.display = 'flex';
        }
        acceptBtn.addEventListener('click', () => {
            sessionStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }

    const form = document.getElementById('form');
    if (!form) return;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    function createPasswordToggle(input) {
        const toggle = document.createElement('i');
        toggle.className = 'fas fa-eye password-toggle';
        toggle.addEventListener('click', () => {
            input.type = input.type === 'password' ? 'text' : 'password';
            toggle.className = input.type === 'password' ? 'fas fa-eye password-toggle' : 'fas fa-eye-slash password-toggle';
        });
        input.parentElement.appendChild(toggle);
    }
    createPasswordToggle(password);
    createPasswordToggle(password2);

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        formControl.querySelector('small').innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.value.trim());
    }

    function checkLength(input, min, max) {
        return input.value.length >= min && input.value.length <= max;
    }

    function checkPasswordsMatch(input1, input2) {
        return input1.value === input2.value;
    }

    function resetFormStyles(form) {
        const formControls = form.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.className = 'form-control';
            const small = control.querySelector('small');
            if (small) small.innerText = '';
        });
    }

    function validateForm() {
        let valid = true;

        if (!checkLength(username, 3, 20) || username.value.trim() === '') {
            showError(username, 'Username must be 3-20 characters');
            valid = false;
        } else {
            showSuccess(username);
        }

        if (!checkEmail(email) || email.value.trim() === '') {
            showError(email, 'Email is not valid');
            valid = false;
        } else {
            showSuccess(email);
        }

        if (!checkLength(password, 8, 25) || password.value.trim() === '') {
            showError(password, 'Password must be 8-25 characters');
            valid = false;
        } else {
            showSuccess(password);
        }

        if (!checkPasswordsMatch(password, password2)) {
            showError(password2, 'Passwords do not match');
            valid = false;
        } else if (password2.value.trim() === '') {
            showError(password2, 'Confirm password is required');
            valid = false;
        } else {
            showSuccess(password2);
        }

        return valid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resetFormStyles(form);
        if (validateForm()) {
            localStorage.setItem('registeredUser', JSON.stringify({
                username: username.value.trim(),
                email: email.value.trim()
            }));
            alert('Registration completed successfully!');
            form.reset();
            resetFormStyles(form);
        }
    });

    document.getElementById('fillBtn')?.addEventListener('click', async () => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const { results: [user] } = await res.json();
            username.value = user.login.username;
            email.value = user.email;
            const pwd = (user.login.password + 'A1').padEnd(8, 'X');
            password.value = password2.value = pwd;
            resetFormStyles(form);
            validateForm();
        } catch (err) {
            console.error('Random user error', err);
        }
    });

});
