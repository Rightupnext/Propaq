import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
// import { navItems } from "../constants";
import { Link } from "react-router-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/wood", label: "Woods" },
  { href: "/", label: "Price" },
  { href: "/testimonials", label: "Testimonials" }
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3  bg-white px-10">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-16 w-38 mr-2" src={logo} alt="Logo" />
            {/* <span className="text-xl tracking-tight">VirtualR</span> */}
          </div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
<ul className="hidden lg:flex ml-14 space-x-12 text-lg">
   <Link to="/"><li>Home</li></Link>
   <Link to="/about"><li>About Us</li></Link>
   <Link to="/wood"><li>Woods</li></Link>
   {/* <li>Price</li> */}
   <Link to="/testimonials"><li>Testimonials</li></Link>
  </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
            <Link to="/contact"  className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white">
          
              Contact Us
        
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 text-white bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
              >
               <h1> Contact Us</h1> 
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
