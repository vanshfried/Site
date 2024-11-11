document.addEventListener('DOMContentLoaded', function() {
    // Set a delay of 7 seconds after page load
    const popupDelay = 7000;

    // Check if it's the first visit or a subsequent visit
    if (!localStorage.getItem('visitedBefore')) {
        // First-time visit: Show popup after 7 seconds
        setTimeout(() => {
            openPopup();
        }, popupDelay);

        // Mark as visited in localStorage
        localStorage.setItem('visitedBefore', 'true');
    } else {
        // Subsequent visit: Show popup after 7 seconds
        setTimeout(() => {
            openPopup();
        }, popupDelay);
    }

    // Popup HTML structure
    const popupHTML = `
    <div id="popup-overlay" class="popup-overlay">
        <div class="popup-container">
            <span id="close-popup" class="close-button">&times;</span>
            <form id="popup-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name" />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" />

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />

                <label for="projectDesc">Project Description:</label>
                <textarea id="projectDesc" name="projectDesc" required placeholder="Describe your project"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>`;

    // Inject the popup HTML into the page
    function openPopup() {
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        document.body.style.overflow = 'hidden';  // Disable background scroll

        // Add event listener for closing the popup when the close button is clicked
        document.getElementById('close-popup').addEventListener('click', closePopup);

        // Form submission handler
        document.getElementById('popup-form').addEventListener('submit', function(event) {
            event.preventDefault();
            submitForm();
        });
    }

    // Close the popup
    function closePopup() {
        const overlay = document.getElementById("popup-overlay");
        if (overlay) {
            overlay.remove();
        }
        document.body.style.overflow = 'auto';  // Enable scroll after closing popup
    }

    // Handle form submission
    function submitForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const projectDesc = document.getElementById("projectDesc").value;

        console.log("Form Submitted: ", { name, email, phone, projectDesc });

        // Optionally, you can add form submission logic here

        closePopup();
    }
});
