import express from "express";

const router = express.Router();

import { createCar } from "../controllers/car.js"  

router.post("/car",  createCar);
// router.get("/car/:_id",  viewACar);
// router.delete("/car/:_id",  deleteCar);

module.exports = router;