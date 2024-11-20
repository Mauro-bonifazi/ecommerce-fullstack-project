import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const { isUserLogged, logout, login } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      login(isAuthenticated);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  //Drawer
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  //Estado Drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const logo = {
    imagen:
      "https://odoo-macstation.moogah.com/web/image/261726-b22da38a/LOGO%20APR%20WEB%20%28300%29.png",
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "black" }}>
          <Toolbar>
            {/* Logo con trigger para abrir el Drawer */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                onMouseEnter={handleDrawerOpen} // Abre el Drawer al pasar el mouse
                src={logo.imagen}
                alt="logo.png"
                style={{
                  width: "100px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </Typography>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <SearchIcon />
            </Link>

            <Cart />
          </Toolbar>
        </AppBar>
      </Box>
      <Divider sx={{ margin: "20px 0" }} />

      {/* Drawer que se despliega desde arriba */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
        onMouseLeave={handleDrawerClose} // Cierra el Drawer al salir el mouse
        PaperProps={{ sx: { backgroundColor: "black" } }}
      >
        <Box sx={{ padding: 2, color: "white" }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: "1.5rem" }}>
            <img
              src={logo.imagen}
              alt="logo.png"
              style={{
                width: "300px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Typography>
          <Divider sx={{ borderColor: "gray", mb: 2 }} />

          {/* Enlaces de navegación en columna */}
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Home
            </Link>
            <Link
              to="/mac"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Mac
            </Link>{" "}
            <Link
              to="/iphone"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Iphone
            </Link>
            <Link
              to="/ipad"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Ipad
            </Link>
            <Link
              to="/watch"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Watch
            </Link>{" "}
            <Link
              to="/airpods"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Airpods
            </Link>
            <Divider sx={{ borderColor: "gray", mb: 2 }} />
            <Link
              to="/terms"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Contacto
            </Link>
            <Divider sx={{ borderColor: "gray", mb: 2 }} />
            {isUserLogged && (
              <Link
                to="/panel"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.0rem",
                }}
              >
                Panel Adminis.
              </Link>
            )}
            {!isUserLogged ? (
              <Link
                to="/panel"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.0rem",
                }}
              >
                Acceso Adminis.
              </Link>
            ) : (
              <Button
                onClick={handleLogout}
                style={{
                  color: "white",
                  fontSize: "0.9rem",
                  textTransform: "none",
                  textAlign: "left",
                  paddingLeft: 0,
                }}
              >
                Cerrar Sesión
              </Button>
            )}
          </nav>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
