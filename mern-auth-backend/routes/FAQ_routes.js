const express = require("express");
const FAQ = require("../models/FAQ_models");

const router = express.Router();

// Get all FAQs
router.get("/", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new FAQ
router.post("/", async (req, res) => {
  try {
    const { name, email, telephone, question } = req.body;
    const newFAQ = new FAQ({ name, email, telephone, question });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an FAQ
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFAQ = await FAQ.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an FAQ
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FAQ.findByIdAndDelete(id);
    res.status(200).json({ message: "FAQ deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
