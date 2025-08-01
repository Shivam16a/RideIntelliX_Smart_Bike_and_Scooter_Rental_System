const express = require("express");
const router = express.Router();
const Vehicle = require("../controllers/vehicleController");
const multer = require("multer");
const path = require("path");


//multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqename = Date.now() + path.extname(file.originalname);
        cb(null, uniqename);
    },

});
const upload = multer({ storage });

router.post("/add", upload.single('image'), Vehicle.createVehicle);
router.get("/", Vehicle.getAllVehicles);
router.get("/:id", Vehicle.getVehicleById);
router.put("/:id", upload.single("image"), Vehicle.updateVehicle);
router.delete("/:id", Vehicle.deleteVehicle);

module.exports = router;