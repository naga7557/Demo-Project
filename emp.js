document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;

    var result = document.getElementById('result');
    result.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Position: ${position}</p>`;
});