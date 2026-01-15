import mongoose from "mongoose";
import { Category } from "./category.model.js";
import { User } from "./user.model.js";

const { Schema, model, Types } = mongoose;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    before: {
      type: String,
    },
    categoryId: {
      type: Types.ObjectId,
      ref: Category,
      required: true,
    },
    fromUserId: {
      type: Types.ObjectId,
      ref: User,
      required: true,
    },
    toUserId: {
      type: Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    collection: "Task",
    timestamps: true,
  }
);

export const Task = model("Task", taskSchema);
