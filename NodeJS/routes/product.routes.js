const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const authenticationToken = require("../middleware/authenticationToken");

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: NIKE
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 */

// Obtener todos los productos (sin autenticación)
router.get("/products", productController.getAllProducts);

// Crear un producto (requiere autenticación)
router.post("/products", authenticationToken, productController.createProduct);

// Actualizar un producto (requiere autenticación)
router.put(
  "/products/:id",
  authenticationToken,
  productController.updateProduct
);

// Eliminar un producto (requiere autenticación)
router.delete(
  "/products/:id",
  authenticationToken,
  productController.deleteProduct
);

module.exports = router;
