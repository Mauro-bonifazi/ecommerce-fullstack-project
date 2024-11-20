import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Security, Apple, ShoppingCart, Home } from "@mui/icons-material"; // Importamos los íconos

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        "& > :not(style)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 250, // Ancho fijo para todos los Papers
          height: 150, // Alto fijo para todos los Papers
          flexShrink: 0, // Evita que se encojan
          flexGrow: 0, // Evita que se expandan
          m: 1,
          padding: 2,
        },
      }}
    >
      <Paper elevation={1}>
        <Security sx={{ fontSize: 40, marginBottom: 1 }} />
        <Typography variant="h6" align="center">
          Seguridad
        </Typography>
        <Typography variant="body2" align="center">
          Base de datos personales protegida
        </Typography>
      </Paper>
      <Paper elevation={1}>
        <Apple sx={{ fontSize: 40, marginBottom: 1 }} />
        <Typography variant="h6" align="center">
          Garantía global Apple
        </Typography>
        <Typography variant="body2" align="center">
          Podés gestionarla en nuestro propio Service Oficial
        </Typography>
      </Paper>
      <Paper elevation={1}>
        <ShoppingCart sx={{ fontSize: 40, marginBottom: 1 }} />
        <Typography variant="h6" align="center">
          Catálogo de productos
        </Typography>
        <Typography variant="body2" align="center">
          {" "}
          La mayor variedad de tecnología de alta gama del mercado
        </Typography>
      </Paper>
      <Paper elevation={1}>
        <Home sx={{ fontSize: 40, marginBottom: 1 }} />
        <Typography variant="h6" align="center">
          Asesoría remota
        </Typography>
        <Typography variant="body2" align="center">
          Comprá desde todo el país, sin moverte de tu casa
        </Typography>
      </Paper>
    </Box>
  );
}
