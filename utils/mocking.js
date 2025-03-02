import bcrypt from "bcrypt";
import { Types } from "mongoose";

export const generateMockUsers = async (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const hashedPassword = await bcrypt.hash("coder123", 10);
        users.push({
            _id: new Types.ObjectId(),
            username: `user${i + 1}`,
            password: hashedPassword,
            role: Math.random() > 0.5 ? "admin" : "user",
            pets: []
        });
    }
    return users;
};

export const generateMockPets = (count) => {
    const petTypes = ["dog", "cat", "bird", "rabbit"];
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            _id: new Types.ObjectId(),
            name: `pet${i + 1}`,
            type: petTypes[Math.floor(Math.random() * petTypes.length)],
            owner: null // Se asignará después si es necesario
        });
    }
    return pets;
};
