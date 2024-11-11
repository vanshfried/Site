document.addEventListener('DOMContentLoaded', function() {
    // Navbar HTML as a string
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Krishrad Innovations</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style="margin-left: 400px;"> <!-- Added margin to the links -->
            <a class="nav-link" href="#">Home</a>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" aria-expanded="false">Services</a>
                <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                  <div class="dropdown-grid">
                    <li class="dropdown-item">
                      <i class="fas fa-mobile-alt"></i>
                      <h6>Mobile App Development</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-laptop-code"></i>
                      <h6>Web App Development</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-paint-brush"></i>
                      <h6>UI/UX Design</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-cogs"></i>
                      <h6>MVP Development</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-cogs"></i>
                      <h6>App Maintenance</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-comment-dots"></i>
                      <h6>ChatGPT Development</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-plug"></i>
                      <h6>IoT Development</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-cogs"></i>
                      <h6>Blockchain</h6>
                    </li>
                    <li class="dropdown-item">
                      <i class="fas fa-vr-cardboard"></i>
                      <h6>AR/VR Development</h6>
                    </li>
                  </div>
                </ul>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" aria-expanded="false">Solutions</a>
              <ul class="dropdown-menu" aria-labelledby="solutionsDropdown">
                <div class="dropdown-grid">
                  <li class="dropdown-item">
                    <h6>College CMS</h6>
                  </li>
                </div>
              </ul>
            </li>
            <a class="nav-link" href="#">Hiring</a>
            <a class="nav-link" href="#">About Us</a>
            <a class="nav-link" href="#">Portfolio</a>
            <a class="nav-link" href="#" style="font-weight: bold; background-color: green; padding: 10px 20px; border-radius: 30px; color: white; max-width: 130px; white-space: nowrap; display: inline-block;">Contact Us</a>
          </ul>
        </div>
      </div>
    </nav>
    `;

    // Injecting the navbar into the page
    document.getElementById('navbar-container').innerHTML = navbarHTML;

    // Adding hover effect to dropdown items for the Services menu
    document.querySelectorAll('.nav-item.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.style.display = 'block'; // Show menu
          setTimeout(() => {
            menu.classList.add('show');
          }, 0);
        });

        dropdown.addEventListener('mouseleave', function() {
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.classList.remove('show');
          setTimeout(() => {
            menu.style.display = 'none'; // Hide menu
          }, 200); // Allow transition time for smooth closing
        });
    });
});
