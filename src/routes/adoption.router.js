import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json([{ id: 1, userId: "123", petId: "456" }]);
});

router.post("/", (req, res) => {
    const newAdoption = req.body;
    res.status(201).json({ id: "789", ...newAdoption });
});

router.get("/:id", (req, res) => {
    res.json({ id: req.params.id, userId: "123", petId: "456" });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Adopción eliminada" });
});

export default router;
