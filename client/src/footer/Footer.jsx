import React from 'react';
import './Footer.css';

const Footer = () => {
  return <>
    <footer className="footer bg-dark text-light pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">RideIntelliX</h5>
            <p>Your trusted bike & car rental partner.</p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Contact</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-phone-alt me-2"></i>8002632535</li>
              <li><i className="fas fa-envelope me-2"></i>shivam123@gmail.com</li>
              <li><i className="fas fa-map-marker-alt me-2"></i>Kajipur Thathan</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top mt-3">
        © {new Date().getFullYear()} RideIntelliX. All Rights Reserved.
      </div>
    </footer>
  </>
};

export default Footer;
