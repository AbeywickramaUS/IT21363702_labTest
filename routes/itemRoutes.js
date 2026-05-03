import express from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.post('/', async (req, res) => {
  const item = new Item({
  name: req.body.name,
  description: req.body.description,
  
  materialType: req.body.price,   // will work once you add price to the model
  
  });
  try {
  const newItem = await item.save();
  res.status(201).json(newItem);
  } catch (err) {
  res.status(400).json({ message: err.message });
  }
  });
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;