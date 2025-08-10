import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Product from "./products/Products";
import WhatsApp from "./whatsapp/Whatsapp";
import Clients from "./clients/Clients";
import Woods from "./woods/Woods";
import Contact from "./components/Contact";
import About from "./components/About";
import Testimonials from "./Test/Testimonials";

// ===== Placeholder Pages =====
const Boxes = () => <h1 className="text-2xl font-bold">Boxes Page</h1>;
const Pallets = () => <h1 className="text-2xl font-bold">Pallets Page</h1>;
const AluminiumFoilBoxes = () => <h1 className="text-2xl font-bold">Aluminium Foil Boxes Page</h1>;
const FAQs = () => <h1 className="text-2xl font-bold">FAQs Page</h1>;
const QuickStart = () => <h1 className="text-2xl font-bold">Quick Start Page</h1>;
const Docs = () => <h1 className="text-2xl font-bold">Docs Page</h1>;
const Support = () => <h1 className="text-2xl font-bold">Support Page</h1>;
const License = () => <h1 className="text-2xl font-bold">License Page</h1>;
const Terms = () => <h1 className="text-2xl font-bold">Terms & Conditions Page</h1>;
const NotFound = () => <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Product />
                <Clients />
                <WhatsApp />
              </>
            }
          />

          {/* Main Pages */}
          <Route path="/wood" element={<Woods />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product Pages */}
          <Route path="/products/boxes" element={<Boxes />} />
          <Route path="/products/pallets" element={<Pallets />} />
          <Route path="/products/aluminium-foil-boxes" element={<AluminiumFoilBoxes />} />

          {/* Resource Pages */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/docs" element={<Docs />} />

          {/* Support Pages */}
          <Route path="/support" element={<Support />} />
          <Route path="/license" element={<License />} />
          <Route path="/terms" element={<Terms />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
