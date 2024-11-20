import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";
import { Grid, Container, Typography } from "@mui/material";
import Feed from "../components/Feed";
import Loader from "../components/Loader";

function WatchPage() {
  // Cambiar la 'w' minúscula a 'W' mayúscula
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();

      // Filtrar productos que contienen "watch" en su nombre
      const watchProducts = response.data.filter(
        (product) =>
          product.name && product.name.toLowerCase().includes("watch")
      );

      setProducts(watchProducts);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        {/* Título grande para "Watch" */}
        <Typography
          variant="h2"
          component="span"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            display: "block",
          }}
        >
          Apple Watch
        </Typography>

        {/* Subtítulo en gris */}
        <Typography
          variant="h2"
          component="span"
          sx={{
            fontSize: "4rem",
            color: "gray",
            display: "block",
          }}
        >
          Elige tu modelo
        </Typography>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                <Feed product={product} />
              </Grid>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </Grid>
      )}
    </Container>
  );
}

export default WatchPage;
