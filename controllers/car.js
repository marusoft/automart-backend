import Car from "../models/car";

export const createCar = async (req, res) => {
  const { state, manufacturer, amount, model, bodyType } = req.body;
  try {
    const car = new Car({
      state,
      manufacturer,
      amount,
      model,
      bodyType,
    });
    if (!state || !manufacturer || !amount || !model || !bodyType)
      return res.status(400).send("Fields cannot be empty");
    const saveCar = await car.save();
    return res.status(201).json({
      saveCar,
      message: "Car created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
