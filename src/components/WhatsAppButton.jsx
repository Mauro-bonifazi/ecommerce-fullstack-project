import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Ícono de MUI
import "../WhatsAppButton.css"; // Archivo CSS para estilos

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://www.whatsapp.com", "_blank");
  };

  return (
    <div className="floating-button" onClick={handleClick}>
      <WhatsAppIcon style={{ fontSize: "36px", color: "#25D366" }} />
    </div>
  );
};

export default WhatsAppButton;
