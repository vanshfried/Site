document.addEventListener('DOMContentLoaded', function(){
    const designHTML = ` <div class="services-container">
        <div class="services-grid">
            <!-- Mobile App Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="Mobile App Icon">
                </div>
                <h3 class="service-title">Mobile App Development</h3>
                <p class="service-description">Build powerful mobile applications for your business needs.</p>
            </div>

            <!-- Web App Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="Web App Icon">
                </div>
                <h3 class="service-title">Web App Development</h3>
                <p class="service-description">Craft intuitive and scalable web applications that resonate with your business needs.</p>
            </div>

            <!-- UI/UX Design -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="UI/UX Design Icon">
                </div>
                <h3 class="service-title">UI/UX Design</h3>
                <p class="service-description">Get world-class Mobile and Web App designing with our striking and user-friendly UI/UX design approach.</p>
            </div>

            <!-- MVP Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="MVP Icon">
                </div>
                <h3 class="service-title">MVP Development</h3>
                <p class="service-description">Quickly validate your product concept and gather valuable user feedback with our MVP development services.</p>
            </div>

            <!-- App Maintenance -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="Maintenance Icon">
                </div>
                <h3 class="service-title">App Maintenance</h3>
                <p class="service-description">Ensure the longevity and efficiency of your mobile application. We guarantee optimal performance and timely updates.</p>
            </div>

            <!-- ChatGPT Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="ChatGPT Icon">
                </div>
                <h3 class="service-title">ChatGPT Development</h3>
                <p class="service-description">Harness the potential of conversational AI with our end-to-end ChatGPT development services.</p>
            </div>

            <!-- IoT Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="IoT Icon">
                </div>
                <h3 class="service-title">IoT Development</h3>
                <p class="service-description">We create innovative IoT enabled solutions that optimize processes, enhance decision-making and drive business growth.</p>
            </div>

            <!-- Blockchain App Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="Blockchain Icon">
                </div>
                <h3 class="service-title">Blockchain App Development</h3>
                <p class="service-description">Venture into the future of secure and transparent transactions with our blockchain app development services.</p>
            </div>

            <!-- AR/VR Development -->
            <div class="service-card">
                <div class="service-icon">
                    <img src="img" alt="AR/VR Icon">
                </div>
                <h3 class="service-title">AR/VR Development</h3>
                <p class="service-description">Immerse your audience in captivating AR & VR experiences. Get engagement and interaction through our AR/VR development services.</p>
            </div>
        </div>
    </div> `
    // Injecting the cards into the page
    document.getElementById('service-cards').innerHTML = designHTML;
});