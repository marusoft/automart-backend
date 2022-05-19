import mongoose from "mongoose";

import { Schema } from "mongoose";

const carSchema = new Schema(
  {
    manufacturer: {
      type: String,
      trim: true,
      required: true,
    },
    condition: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: [String],
      default: ["Available"],
      enum: ["Available", "Sold"],
    },
    amount: {
      type: String,
      trim: true,
      required: true,
    },
    model: {
      type: String,
      trim: true,
      required: true,
    },
    bodyType: {
      type: String,
      trim: true,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Car", carSchema);
