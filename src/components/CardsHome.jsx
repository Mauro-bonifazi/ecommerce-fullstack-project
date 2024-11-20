import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardsHome = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Primera fila: 3 Cards */}
      {/* Card Grande */}
      <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: 700, backgroundColor: "#FFB6C1" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                iPhone 15 Pro Max 256 GB. Ahora con Titanio
              </Typography>
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                En 12 cuotas sin interés de $ 403.333,25
              </Typography>
              <CardActions>
                <Button
                  component={Link}
                  to="/iphone"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Comprar
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image="https://www.macstation.com.ar/web/image/product.product/87020/image_1024/%5BMU793BE-A%5D%20iPhone%2015%20Pro%20Max%20256%20GB%20-%20Titanio%20Natural?unique=06f99e8"
              alt="iPhone 15 Pro Max"
              sx={{ objectFit: "cover", width: "80%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card Pequeña 1 */}
      <Grid item xs={12} md={3}>
        <Card sx={{ backgroundColor: "#B3D9FF" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MacBook Air 13" M3 de 256. Superligera. Superchip M3.
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                12 cuotas sin interés de $ 303.333,25
              </Typography>
              <CardActions>
                <Button
                  component={Link}
                  to="/mac"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Comprar
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              component="img"
              height="200"
              image="https://www.macstation.com.ar/web/image/product.product/62635/image_1024/%5BMLY23LE-A%5D%20MacBook%20Air%2013%22%20M2%2010C%20GPU-8GB-512GB%20-%20Blanco%20Estrella?unique=dac77d1"
              alt="MacBook Air"
              sx={{ objectFit: "cover", width: "100%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card Pequeña 2 */}
      <Grid item xs={12} md={3}>
        <Card sx={{ backgroundColor: "#FFFFB3" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                iPhone 14 Pro 128 GB
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                12 cuotas sin interés de $ 250.000,00
              </Typography>
              <CardActions>
                <Button
                  component={Link}
                  to="/iphone"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Comprar
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              component="img"
              height="250"
              image="https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Fb7f25eb6-732f-46f3-a9de-73ef6b87a522.png&w=1920&q=75"
              alt="iPhone 14 Pro"
              sx={{ objectFit: "cover", width: "100%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      {/* Segunda fila: 2 Cards */}
      {/* Card Grande */}
      <Grid item xs={12} md={6}>
        <Card sx={{ backgroundColor: "#FFFFB3" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                iPad Pro 11" M3 128 GB. Pantalla Liquid Retina
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                12 cuotas sin interés de $ 450.000,00
              </Typography>
              <CardActions>
                <Button
                  component={Link}
                  to="/ipad"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Comprar
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image="https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F43fff40b-c8dd-445b-b71c-10ad91c1c3f9.png&w=1920&q=75"
              alt="iPad Pro"
              sx={{ objectFit: "contain", width: "100%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      {/* Card Pequeña en la segunda fila */}
      <Grid item xs={12} md={6}>
        <Card sx={{ backgroundColor: "#FFDAB9" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Apple Watch Ultra
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                12 cuotas sin interés de $ 150.000,00
              </Typography>
              <CardActions>
                <Button
                  component={Link}
                  to="/watch"
                  size="medium"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Comprar
                </Button>
              </CardActions>
            </CardContent>
            <CardMedia
              component="img"
              height="200"
              image="https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F82daf351-a540-4700-9476-91d0cbd365b1.png&w=1920&q=75"
              sx={{ height: "300px", objectFit: "contain", width: "100%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                color="white"
              >
                Preventa
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "white", textAlign: "center" }}
              >
                ¡Se de los primeros en vivir el futuro!
              </Typography>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{
                  color: "#FFD700", // Dorado
                  textShadow:
                    "0 0 8px #FFD700, 0 0 15px #FFA500, 0 0 20px #FF4500",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                iPhone 16
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image="https://back.maximstore.com/static/images/landings/bb4d5ea1-ff9f-4003-9ac8-c18ab63cf2d0.png?600061f76f70"
              alt="iPad Pro"
              sx={{ objectFit: "contain", width: "100%", textAlign: "center" }}
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ width: "100%", height: "90vh", backgroundColor: "black" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                color="white"
              >
                ¡Completa tu experiencia Apple con los mejores accesorios!
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                Descubrí nuestra selección de accesorios diseñados para
                complementar tus dispositivos Apple.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image="https://www.macstation.com.ar/theme_macstation/static/src/img/banners/home-black.png"
              alt="iPad Pro"
              sx={{ objectFit: "contain", width: "100%" }}
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardsHome;
