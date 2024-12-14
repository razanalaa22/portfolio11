
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Show the confirmation message
    document.getElementById("confirmation-message").classList.remove("hidden");

    // (Optional) Send the data to a server here using AJAX or Fetch API
    console.log(`Appointment booked for ${name} (${email}) on ${date} at ${time}`);
});
