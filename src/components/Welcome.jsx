import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Replace with your


export default function LogoLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <img
        src={logo} // Replace with your logo path
        alt="TheLensAndLights"
        className="w-52 h-40 animate-pulse"
      />
    </div>
  );
}
