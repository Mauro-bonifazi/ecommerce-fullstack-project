import React from "react";
import { Box, Typography, Container } from "@mui/material";
import RedSocial from "./RedSocial";

function Footer() {
  const Logo = {
    imagen:
      "https://odoo-macstation.moogah.com/web/image/261726-b22da38a/LOGO%20APR%20WEB%20%28300%29.png",
  };
  return (
    <Box
      sx={{
        backgroundColor: "black", // Color de fondo
        color: "white", // Color del texto
        py: 2,

        mt: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <img src={Logo.imagen} alt="Logo" style={{ width: "200px" }} />
        <RedSocial />
        <br />
        <Typography variant="body1">
          Información: Horarios de atención Lunes a Viernes de 10 a 18:30hs
          Dirección Av. Córdoba 456 (CASA) Canales de atención Tel: (+54) 222
          4312 1020 info@mmacstore.com © {new Date().getFullYear()} E-commerce
          Full Stack. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
