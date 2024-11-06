//send the form through EmailJs

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // prevent the submit button to refresh the page
        // check if the email field is empty
        let emailInput  = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        //email validation
        if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
        }

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