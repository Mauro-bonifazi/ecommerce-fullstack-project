const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/catalog.controller");
const authenticationToken = require("../middleware/authenticationToken");

router.get("/catalogs", catalogController.getAllCatalogs);
router.post("/catalogs", authenticationToken, catalogController.createCatalog);
router.put(
  "/catalogs/:id",
  authenticationToken,
  catalogController.updateCatalog
);
router.delete(
  "/catalogs/:id",
  authenticationToken,
  catalogController.deleteCatalog
);

module.exports = router;
