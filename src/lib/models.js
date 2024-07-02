import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
    projectLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.models?.Project || mongoose.model("Project", ProjectSchema);
