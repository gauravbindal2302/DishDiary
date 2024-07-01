import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "./config.env" });

const server = express();

server.use(express.json());
server.use(cors());

const DB = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((error) => {
    console.error("Error connecting to Database!", error);
  });

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  instructions: String,
  prepTime: Number,
  noOfServings: Number,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

server.post("/addRecipe", async (req, res) => {
  const { recipeName, ingredients, instructions, prepTime, noOfServings } =
    req.body;

  try {
    const newRecipe = new Recipe({
      recipeName,
      ingredients,
      instructions,
      prepTime,
      noOfServings,
    });

    const savedRecipe = await newRecipe.save();
    res.status(200);
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ message: "Server error" });
  }
});

server.get("/viewRecipe", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Server error" });
  }
});

server.get("/", (req, res) => {
  res.send("Hello! Server is Up");
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
