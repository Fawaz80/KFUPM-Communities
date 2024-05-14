//routes
const router = require("express").Router();
const materialController = require("../controller/material");

//Get list of all materials in the database
router.get("/", materialController.getAllMaterials);

// Add a new material to the database
router.post("/", materialController.createMaterial);

// Get a material by ID
router.get('/', materialController.getMaterialById);

// Update a material by ID
router.put('/', materialController.updateMaterialById);

// Delete a material by ID
router.delete('/', materialController.deleteMaterialById);
 
//export modules
 module.exports = router;