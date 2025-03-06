import express from "express";

const router = express.Router();

router.get("/mockingpets", (req, res) => {
    res.json([{ id: 1, name: "Firulais", species: "dog" }]);
});

export default router;
