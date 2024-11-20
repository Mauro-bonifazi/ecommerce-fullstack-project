const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;
const mongodb = "mongodb://127.0.0.1:27017/node_js";
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//AGREGAMOS ROUTES
const productRoutes = require("./routes/product.routes");
const catalogRoutes = require("./routes/catalog.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/api", productRoutes);
app.use("/api", catalogRoutes);
app.use("/auth", authRoutes);

//AGREGAR SWAGGER
(swaggerJsdoc = require("swagger-jsdoc")),
  (swaggerUi = require("swagger-ui-express"));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API de la tienda en linea Curso Full Stack juniors",
      version: "0.1.0",
      description: "API de la tienda en linea Curso Full Stack juniors",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Innovare Software",
        url: "https://innovare.com.ar",
        email: "info@innovare.com.ar",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
