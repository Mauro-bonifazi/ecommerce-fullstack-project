import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../Context/CartContext";
import emailjs from "emailjs-com";

const Cart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    cart,
    removeFromCart,
    resetCart,
    addToCart,
    decreaseQuantity,
    formatPrice,
  } = useCart();
  const [openAlert, setOpenAlert] = useState(false);

  const calculateTotalPrice = (cart) => {
    let total = 0;
    for (const item of cart) {
      total += item.product.price * item.quantity;
    }
    return total;
  };

  const total = calculateTotalPrice(cart);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = () => {
    let str = "";
    cart.map((item) => {
      str += `${item.product.name}, cantidad: ${item.quantity}, precio unitario: $${item.product.price} \n`;
      return null;
    });

    let template = {
      to_email: "maurobonifazi@hotmail.com",
      subject: "Nuevo pedido",
      str: str,
      total: formatPrice(total), // Usamos la función formatPrice
    };

    emailjs
      .send(
        "service_k9bj01h",
        "template_rrbbqb9",
        template,
        "MhNTIBpkaTGTw_GJU"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setOpenAlert(true);
            resetCart();
            handleCartClose();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpenAlert(true);
  };

  return (
    <div>
      <Badge badgeContent={cart.length} color="secondary">
        <IconButton
          color="inherit"
          aria-label="Shopping Cart"
          onClick={handleCartClick}
        >
          <LocalMallIcon />
        </IconButton>
      </Badge>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Carrito de Pedidos
            <hr />
          </Typography>
          {cart.length > 0 ? (
            <>
              <List>
                {cart.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Product Image" src={item.product.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${item.product.name}`}
                      secondary={
                        <span>
                          Precio unitario:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            ${formatPrice(item.product.price)}
                          </span>
                        </span>
                      }
                    />

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        onClick={() => decreaseQuantity(item.product)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        onClick={() =>
                          addToCart(item.product, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <IconButton
                      color="error"
                      aria-label="Delete"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                Total Carrito: ${formatPrice(total)}
              </Typography>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </>
          ) : (
            <Typography variant="body2">Su carrito está vacío.</Typography>
          )}
        </Paper>
      </Popover>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Pedido Enviado!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cart;
