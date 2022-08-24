const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    // update h1 to the Welcome, {input value}
    h1.innerText = `Welcome, ${input.value}`;

    // if empty return to Enter your username
    if (input.value == '') {
        h1.innerText = 'Enter Your Username';
    }

})
