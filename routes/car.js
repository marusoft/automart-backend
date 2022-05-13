import express from "express";

const router = express.Router();

import { createCar, viewACar, viewAllCar, deleteCar } from "../controllers/car.js"  

router.post("/car",  createCar);
router.get("/car",  viewAllCar);
router.get("/car/:_id",  viewACar);
router.delete("/car/:_id",  deleteCar);

module.exports = router;