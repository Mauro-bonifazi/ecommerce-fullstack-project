import { useEffect, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createProduct, updateProduct } from "../api/productsApi";

function FormProduct(props) {
  const [product, setProduct] = useState({
    name: "",
    catalog: "",
    image: "",
    description: "",
    price: 0,
    stock: 0,
  });

  // Cargar producto al abrir el modal si existe
  useEffect(() => {
    if (props.product && props.product._id) {
      setProduct(props.product);
    }
  }, [props.product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el producto tiene _id para saber si es una edición
    if (product._id) {
      // EDITAR PRODUCTO
      updateProduct(product._id, product)
        .then((response) => {
          if (response.data) {
            handleClose(); // Cerrar el diálogo tras la operación
            props.fetchData(); // Refrescamos los datos
            props.setSnackbarMessage("Producto editado correctamente");
            props.setSnackbarSeverity("success"); // Mensaje verde
          }
        })
        .catch((error) => {
          alert("Error al actualizar el producto: " + error.message);
          handleClose();
        });
    } else {
      // CREAR NUEVO PRODUCTO
      createProduct(product)
        .then((response) => {
          if (response.data) {
            handleClose();
            props.fetchData();
            props.setSnackbarMessage("Producto creado correctamente");
            props.setSnackbarSeverity("success");
          }
        })
        .catch((error) => {
          alert("Error al crear el producto: " + error.message);
          handleClose();
        });
    }
  };

  // Funciones para abrir y cerrar el diálogo
  const handleClose = () => {
    props.handleClose();
  };

  return (
    <Box>
      <Dialog open={props.open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            {product._id ? "Editar Producto" : "Crear nuevo Producto"}
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Nombre"
              margin="normal"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Descripción"
              margin="normal"
              name="description"
              value={product.description || ""}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Imagen URL"
              margin="normal"
              name="image"
              value={product.image || ""}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Precio"
              margin="normal"
              name="price"
              value={product.price || ""}
              onChange={handleChange}
              required
              type="number"
            />
            <TextField
              fullWidth
              label="Stock"
              margin="normal"
              name="stock"
              value={product.stock || ""}
              onChange={handleChange}
              type="number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" autoFocus>
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default FormProduct;
