import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";
import { Grid, Container, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Feed from "../components/Feed";
import Loader from "../components/Loader";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (param = "") => {
    setLoading(true);
    try {
      const response = await getAllProducts(param);

      // Ordenar los productos alfabéticamente por nombre
      const sortedProducts = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setProducts(sortedProducts);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    fetchData(searchTerm.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Container sx={{ marginTop: "64px" }}>
        <br />
        <div style={{ marginBottom: "20px" }}>
          <TextField
            placeholder="Buscar..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "black" }} />
                </InputAdornment>
              ),
              sx: {
                height: "100px",
                fontSize: "2.2rem",
                borderRadius: "20px",
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "1.2rem",
              },
            }}
          />
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              display: "block",
              marginTop: "20px",
            }}
          >
            Explora
          </Typography>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={2}>
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

export default HomePage;
