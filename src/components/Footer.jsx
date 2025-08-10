import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-xs mx-auto sm:max-w-2xl lg:max-w-full">
            {/* Logo & Contact */}
            <div className="col-span-full lg:mb-10 max-lg:border-b max-lg:pb-8 lg:border-r border-gray-200 lg:col-span-2 lg:max-w-xs lg:mb-0">
              <Link to="/" className="flex justify-center mb-12 lg:justify-start">
                <img src={logo} alt="Propaq Logo" width={300} height={300} />
              </Link>
              <ul className="grid gap-5">
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <a href="mailto:support@propaqq.com" className="text-gray-600 hover:text-gray-900">
                    support@propaqq.com
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <a href="tel:+919789551204" className="text-gray-600 hover:text-gray-900">
                    +91 97895 51204
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <a
                    href="https://maps.google.com/?q=499/3A, Dam Thottam, Bharathi Street, Chinnavedampatti, Coimbatore-641049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    499/3A, Dam Thottam,<br />
                    Bharathi Street,<br />
                    Chinnavedampatti,<br />
                    Coimbatore-641049
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Pages</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6"><Link to="/">Home</Link></li>
                <li className="mb-6"><Link to="/wood">Woods</Link></li>
                <li className="mb-6"><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6"><Link to="/products/boxes">All Types of Boxes</Link></li>
                <li className="mb-6"><Link to="/products/pallets">Wood Pallets</Link></li>
                <li><Link to="/products/aluminium-foil-boxes">Aluminium Foil Based Boxes</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6"><Link to="/faqs">FAQs</Link></li>
                <li className="mb-6"><Link to="/quick-start">Quick Start</Link></li>
                <li><Link to="/docs">Documentation</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6"><Link to="/support">Customer Support</Link></li>
                <li className="mb-6"><Link to="/license">License</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-500">
                © <Link to="/">PROPAQ</Link> 2025, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
