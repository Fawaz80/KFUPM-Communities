// Import the material model
const Material = require('../models/material');

// Get all materials
async function getAllMaterials(req, res) {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create a new material
async function createMaterial(req, res) {
  try {
    const { materialName, materialCom, materialURL } = req.body;
    const newMaterial = new Material({
      materialName,
      materialCom,
      materialURL,
    });
    const savedMaterial = await newMaterial.save();
    res.status(201).json(savedMaterial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get a material by ID
async function getMaterialById(req, res) {}

// Update a material by ID
async function updateMaterialById(req, res) {}

// Function to create new material
async function uploadFile(req, res) {}

async function deleteMaterialById(req, res) {}

// Define the route handler function separately

//export modules
module.exports = {
  getAllMaterials,
  uploadFile,
  getMaterialById,
  updateMaterialById,
  deleteMaterialById,
};
