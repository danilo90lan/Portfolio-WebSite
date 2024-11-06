//send the form through EmailJs

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
                alert("Message sent succesfully!")
            }, (error) => {
                console.log('FAILED...', error);
                alert("Failed to send the message. Please try again.")
            });
            
            // Clear the form fields after submission
            this.reset();
    });
}