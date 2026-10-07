const express = require("express");
const router = express.Router();

const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carControllers");

router.get("/", getAllCars);
router.post("/", createCar);
router.get("/:carId", getCarById);
router.put("/:carId", updateCar);
router.delete("/:carId", deleteCar);

module.exports = router;
