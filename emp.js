document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;
    var salary = document.getElementById('salary').value; // Add the employee salary field

    // Validation to check if the name field is not empty
    if (name.trim() === '') {
        alert('Name is required.');
        return;
    }

    // Validation to accept only alphabets, dots, and spaces for the name field
    var nameRegex = /^[A-Za-z .]+$/;
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name with alphabets, dots, and spaces only.');
        return;
    }

    // Validation to accept only alphabets, dots, and spaces for the position field
    var positionRegex = /^[A-Za-z .]+$/;
    if (!positionRegex.test(position)) {
        alert('Please enter a valid position with alphabets, dots, and spaces only.');
        return;
    }

    // Validation to check if the email field is not empty and has a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var result = document.getElementById('result');
    result.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Position: ${position}</p><p>Salary: ${salary}</p>`;
});