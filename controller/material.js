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
        const newMaterial = new Material({ materialName, materialCom, materialURL });
        const savedMaterial = await newMaterial.save();
        res.status(201).json(savedMaterial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a material by ID
async function getMaterialById(req, res) {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.json(material);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a material by ID
async function updateMaterialById(req, res) {
    try {
        const { materialName, materialCom, materialURL } = req.body;
        const updatedMaterial = await Material.findByIdAndUpdate(
            req.params.id,
            { materialName, materialCom, materialURL },
            { new: true }
        );
        if (!updatedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.json(updatedMaterial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a material by ID
async function deleteMaterialById(req, res) {
    try {
        const deletedMaterial = await Material.findByIdAndDelete(req.params.id);
        if (!deletedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//export modules
module.exports = {
    getAllMaterials,
    createMaterial,
    getMaterialById,
    updateMaterialById,
    deleteMaterialById
};