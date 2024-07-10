document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');

    if(name && email && message) {
        responseMessage.textContent = 'Thank you for your submission!';
        responseMessage.style.color = 'green';
        
        // Clear the form
        document.getElementById('requestForm').reset();
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.style.color = 'red';
    }
});