import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k9bj01h",
        "template_pegrdde",
        e.target,
        "MhNTIBpkaTGTw_GJU"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setOpen(true);
            setSnackbarMessage("Mensaje Enviado!");
            setSnackbarSeverity("success");
            setContact({
              name: "",
              lastName: "",
              email: "",
              message: "",
            });
          }
        },
        (error) => {
          setOpen(true);
          setSnackbarMessage("Error al enviar el mensaje");
          setSnackbarSeverity("error");
        }
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <Container sx={{ marginTop: "64px" }}>
      {/* Título del formulario */}
      <Typography variant="h4" gutterBottom>
        Recibí todas las novedades en tu correo electrónico ¡Suscribite a
        nuestro newsletter!
      </Typography>

      {/* Subtítulo del formulario */}
      <Typography variant="subtitle1" gutterBottom color="textSecondary">
        Complete el siguiente formulario y envíe su consulta.
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Campo de Nombre */}
        <TextField
          fullWidth
          label="Nombre"
          margin="normal"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />

        {/* Campo de Apellido */}
        <TextField
          fullWidth
          label="Apellido"
          margin="normal"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          required
        />

        {/* Campo de Email */}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          required
        />

        {/* Campo de Mensaje */}
        <TextField
          fullWidth
          label="Mensaje"
          margin="normal"
          name="message"
          multiline
          rows={4}
          value={contact.message}
          onChange={handleChange}
          required
        />

        {/* Botón de envío */}
        <Button variant="contained" type="submit" sx={{ mt: 2, mb: 2 }}>
          Enviar
        </Button>
      </form>

      {/* Snackbar para el estado del formulario */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
