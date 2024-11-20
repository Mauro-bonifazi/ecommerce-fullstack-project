import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Button,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { useCart } from "../Context/CartContext";

function Feed({ product }) {
  const { noStockAlert, setNoStockAlert, formatPrice, shoopCart } = useCart();
  const { name, description, price, image, stock } = product;

  const handleAddToCart = () => {
    shoopCart(product);
  };

  const handleCloseAlert = () => {
    setNoStockAlert(false); // Resetea la alerta de stock en el contexto
  };

  return (
    <div style={style.feed}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 500,
          maxHeight: 500,
          minHeight: 500,
          backgroundColor: "#f5f5f5",
          borderRadius: "20px",
        }}
      >
        <CardHeader title={name} />
        <CardMedia component="img" height="194" image={image} alt="" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            $ {formatPrice(price)}
          </h3>

          <Tooltip
            title={stock > 0 ? "Agregar al carrito" : "Sin stock disponible"}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button
                onClick={() => handleAddToCart(product)}
                disabled={stock === 0}
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "20px",
                  paddingX: 3,
                  ":hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                Comprar
              </Button>
            </div>
          </Tooltip>
        </CardContent>
      </Card>

      <Snackbar
        open={noStockAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          No hay más stock disponible para este producto.
        </Alert>
      </Snackbar>
    </div>
  );
}

const style = {
  feed: { margin: "20px", display: "flex", justifyContent: "center" },
};

export default Feed;
