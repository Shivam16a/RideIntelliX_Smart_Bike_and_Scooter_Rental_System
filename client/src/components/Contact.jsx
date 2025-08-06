import React from "react";


const Contact = () => {
  return<>
     <div className="py-5 px-3" style={{ background: "#eaeaea", marginTop: "80px" }}>
      <div className="container">
        <h1 className="text-center fw-bold text-primary mb-5">Contact Us</h1>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="bg-white rounded shadow p-4 h-100 border border-2">
              <h4 className="fw-bold text-dark mb-3">
                <i className="fa fa-map-marker me-2 text-danger"></i> Address
              </h4>
              <p className="text-muted">Kazipur Thathan, Hajipur, Vaishali, Bihar</p>

              <h4 className="fw-bold text-dark mt-4 mb-3">
                <i className="fa fa-phone me-2 text-success"></i> Phone Numbers
              </h4>
              <ul className="list-unstyled text-muted">
                <li>+91 8002632535</li>
                <li>+91 72929 87108</li>
                <li>+91 82985 51747</li>
                <li>+91 86768 67882</li>
              </ul>

              <h4 className="fw-bold text-dark mt-4 mb-3">
                <i className="fa fa-envelope me-2 text-primary"></i> Email
              </h4>
              <p className="text-muted">rideintellixride@gmail.com</p>

              <h4 className="fw-bold text-dark mt-4 mb-3">
                <i className="fa fa-clock me-2 text-warning"></i> Working Hours
              </h4>
              <p className="text-muted">Mon - Sat: 9:00 AM - 7:00 PM</p>

              <h4 className="fw-bold text-dark mt-4 mb-3">Social Media</h4>
              <div className="d-flex gap-3 fs-4">
                <a href="https://www.instagram.com/silent_life_2004/" target="_blank" rel="noopener noreferrer" className="text-danger">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-info">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white rounded shadow p-4 border border-2">
              <h4 className="fw-bold text-dark mb-4">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control border border-dark-subtle shadow-sm" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control border border-dark-subtle shadow-sm" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control border border-dark-subtle shadow-sm" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control border border-dark-subtle shadow-sm" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 shadow">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="fw-bold text-center text-secondary mb-3">Find Us on Google Maps</h4>
          <div className="rounded shadow border border-2 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8880.935411429336!2d85.24668494563066!3d25.75238232270532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d154f486e1d%3A0x9b63fce58b5db91!2sGautam%20flour%20mills!5e1!3m2!1sen!2sin!4v1754318307966!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RideIntelliX Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Contact;


