import { getAllProducts } from "../../api/productsApi";
import { useEffect, useState } from "react";
import {
  Container,
  TableRow,
  Table,
  Avatar,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import FormProduct from "../../components/FormProduct";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Edit";
import { removeProduct } from "../../api/productsApi";

function HomePagePanel() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [product, setProduct] = useState({
    name: "",
    catalog: "",
    image: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleClickOpen = () => {
    setProduct({
      name: "",
      catalog: "",
      image: "",
      description: "",
      price: 0,
      stock: 0,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (param) => {
    setLoad(true);
    getAllProducts(param).then((response) => {
      setProducts(response.data);
      setLoad(false);
    });
  };

  const handleRemoveItem = (id) => {
    removeProduct(id)
      .then((response) => {
        if (response) {
          fetchData(); // Actualiza la lista de productos
          setSnackbarMessage("Producto eliminado correctamente");
          setSnackbarSeverity("error"); // Color rojo para eliminación
        }
      })
      .catch((error) => {
        alert(error);
        handleClose();
      });
  };

  const handleUpdateItem = (item) => {
    setProduct(item);
    setOpen(true);
  };

  return (
    <Container sx={{ marginTop: "64px" }}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Crear Producto
      </Button>
      <FormProduct
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        open={open}
        product={product}
        fetchData={fetchData}
        setSnackbarMessage={setSnackbarMessage}
        setSnackbarSeverity={setSnackbarSeverity}
      />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Catalogo</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt="Product Image" src={row.image} />
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "800" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.catalog}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="inherit"
                    aria-label="Editar"
                    onClick={() => handleUpdateItem(row)}
                  >
                    <UpdateIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Eliminar"
                    onClick={() => handleRemoveItem(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default HomePagePanel;
