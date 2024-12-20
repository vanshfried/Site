document.addEventListener('DOMContentLoaded', function(){
    const footer = `
<footer>

    <!-- Consultation Section Start -->
    <div style="background-color: #2BD7B1; padding: 15px 20px; color: black; 
            display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
        <div style="max-width: 100%; margin-bottom: 15px; flex: 1;">
            <p style="margin: 0; font-weight: bold; font-size: 1.1em;">Need Any Consultations?</p>
            <h2 style="margin: 5px 0; font-size: 1.6em;">Unlock growth together with expert consultations</h2>
        </div>
        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
            <a href="tel:6005130753" style="color: white; background-color: #1469FF; padding: 10px 15px; 
                  text-decoration: none; border-radius: 5px; font-weight: bold;">
                Contact Us →
            </a>
            <div style="text-align: center;">
                <a href="tel:1234567890"><i class="fas fa-phone-alt" style="font-size: 1.4em; color: #1469FF;"></i></a>
                <p style="margin: 0; font-weight: bold;">Helpline:</p>
                <a href="tel:1234567890" style="text-decoration: none; color: black;">+91 1234567890</a>
            </div>
        </div>
    </div>
    <!-- Consultation Section End -->

    <!-- Footer Start -->
    <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s"style="background-color:#17303B">
        <div class="container py-5 border-start-0 border-end-0"
            style="border: 1px solid; border-color: rgb(255, 255, 255, 0.08);">
            <div class="row g-2">
                <div class="col-md-4 col-lg-4">
                    <div class="footer-item">
                            <h3 class="text-white mb-4 ">KrishRad Innovations</h3>

                        <p class="mb-2" style="line-height: 1.5; color:#5F7578">
                            At KrishRad Innovations, we specialize in providing state-of-the-art software solutions that
                            empower businesses to thrive in a fast-changing digital landscape. Our mission is to help
                            organizations unlock their full potential through cutting-edge technologies, seamless
                            integrations, and expertly crafted digital solutions.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 offset-lg-1"> <!-- Changed column size and added offset -->
                    <div class="footer-item" style="margin-bottom: 20px;">
                        <h4 class="text-white mb-4">Quick Links</h4>
                        <a href="index.html" class="mb-2 d-block"><i class="fas fa-angle-right me-2"></i>Home</a>
                        <a href="about.html" class="mb-2 d-block"><i class="fas fa-angle-right me-2"></i>About Us</a>
                        <a href="products.html" class="mb-2 d-block"><i class="fas fa-angle-right me-2"></i>Products</a>
                        <a href="careers.html" class="mb-2 d-block"><i class="fas fa-angle-right me-2"></i>Career</a>
                        <a href="contact.html" class="d-block"><i class="fas fa-angle-right me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="footer-item" style="margin-bottom: 10px;">
                        <h4 class="text-white mb-4">Contact Info</h4>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fas fa-map-marker-alt text-primary me-3"></i>
                            <p class="text-white mb-0">Trikuta Nagar, Jammu, India</p>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fas fa-envelope text-primary me-3"></i>
                            <a href="mailto:info@krishradinnovations.com" class="text-white mb-0"
                                style="text-decoration: none;">
                                info@krishradinnovations.com
                            </a>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fa fa-phone-alt text-primary me-3"></i>
                            <a href="tel:6005130753" class="text-white mb-0" style="text-decoration: none;">
                                6005130753
                            </a>
                        </div>

                        <h4 class="text-white mb-4">Follow Us:-</h4>
                        <div class="d-flex">
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" target="_blank"
                                href="https://www.facebook.com/profile.php?id=61566904445160&mibextid=JRoKGi">
                                <i class="fab fa-facebook-f text-white"></i>
                            </a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" target="_blank"
                                href="https://x.com/Krishradpvtltd">
                                <i class="fab fa-twitter text-white"></i>
                            </a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-3" target="_blank"
                                href="https://www.instagram.com/krishradinnovations/?utm_source=ig_web_button_share_sheet">
                                <i class="fab fa-instagram text-white"></i>
                            </a>
                            <a class="btn btn-primary btn-sm-square rounded-circle" target="_blank"
                                href="https://www.linkedin.com/company/krishrad-innovations-pvt-ltd/">
                                <i class="fab fa-linkedin-in text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Copyright Start -->
    <div class="container-fluid copyright" style="background-color: #111; color: white; padding: 10px 0;">
        <div class="container d-flex flex-column align-items-center justify-content-center" style="min-height: 50px;">
            <div class="text-center">
                <span class="text-body">
                    <i class="fas fa-copyright text-light me-2"></i>KrishRad Innovations, All rights reserved.
                </span>
            </div>
        </div>
    </div>
    <!-- Copyright End -->


</footer> `

document.getElementById('footer').innerHTML = footer;

 });
