import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";
import { Grid, Container, Typography } from "@mui/material";
import Feed from "../components/Feed";
import Loader from "../components/Loader";

function IphonePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();

      // Filtrar productos que contienen "iPhone" en su nombre
      const iphoneProducts = response.data.filter(
        (product) =>
          product.name && product.name.toLowerCase().includes("iphone")
      );

      setProducts(iphoneProducts);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        {/* Título grande para "Iphone" */}
        <Typography
          variant="h2"
          component="span"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            display: "block",
          }}
        >
          Iphone
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

export default IphonePage;
