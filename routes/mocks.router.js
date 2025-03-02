import { Router } from "express";
import { generateMockUsers, generateMockPets } from "../utils/mocking.js";
import UserModel from "../models/User.model.js";
import PetModel from "../models/Pet.model.js";

const router = Router();

router.get("/mockingpets", async (req, res) => {
    const pets = await PetModel.find();
    res.json(pets);
});

router.get("/mockingusers", async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
});

router.post("/generateData", async (req, res) => {
    try {
        const { users, pets } = req.body;

        if (!users || !pets || users < 0 || pets < 0) {
            return res.status(400).json({ error: "Los valores de 'users' y 'pets' deben ser números positivos." });
        }

        // Generar usuarios y mascotas
        const mockUsers = await generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        // Insertar en la base de datos
        await UserModel.insertMany(mockUsers);
        await PetModel.insertMany(mockPets);

        res.json({ message: "Datos generados e insertados con éxito", users: users, pets: pets });
    } catch (error) {
        res.status(500).json({ error: "Error al generar datos", details: error.message });
    }
});

export default router;
