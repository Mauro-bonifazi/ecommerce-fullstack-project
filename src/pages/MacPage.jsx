import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";
import { Grid, Typography, Container } from "@mui/material";
import Feed from "../components/Feed";
import Loader from "../components/Loader";

function MacPage() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();

      // Filtrar los productos que contienen "Mac" en su nombre
      const macProducts = response.data.filter(
        (product) => product.name && product.name.toLowerCase().includes("mac")
      );

      setProducts(macProducts);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          {/* Título grande para "Mac" */}
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Mac
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

        {/* Loader mientras se cargan los productos */}
        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={2}>
            {/* Muestra los productos */}
            {products.map((product, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                <Feed product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default MacPage;
