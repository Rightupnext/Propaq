import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = "+919789551204"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        backgroundColor: "#25D366",
        color: "white",
        width: "59px",  // Reduced size
        height: "59px", // Reduced size
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px", // Icon size adjusted
        textDecoration: "none",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
