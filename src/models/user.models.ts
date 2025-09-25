import mongoose, { Schema } from "mongoose";
import { IWorkflowType } from "./workflow.models";

export interface IUserSchema extends mongoose.Document {
  email: string;
  isVerified: boolean;
  name: string;
  image: string;
  provider: "google" | "github" | "instagram";
  workflows: mongoose.Types.ObjectId[] | IWorkflowType[];
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUserSchema>(
  {
    email: {
      type: String,
      required: [true, "email is required!"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: [true, "name is required!"],
      minlength: [2, "name must be at least 2 characters!"],
      maxlength: [50, "name must not be more than 50 characters!"],
      trim: true,
    },
    image: {
      type: String
    },
    provider: {
      type: String,
      required: [true, "provider is required!"],
      enum: ["google", "github", "instagram"],
    },
    workflows: [
      { type: Schema.Types.ObjectId, ref: "Workflow" }
    ],
  },
  { timestamps: true }
);

export const User = mongoose.models.User ?? mongoose.model<IUserSchema>("User", userSchema);
