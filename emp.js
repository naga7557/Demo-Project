document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;

    // Validation to accept only alphabets, dots, and spaces for the name field
    var regex = /^[A-Za-z .]+$/;
    if (!regex.test(name)) {
        alert('Please enter a valid name with alphabets, dots, and spaces only.');
        return;
    }

    var result = document.getElementById('result');
    result.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Position: ${position}</p>`;
});