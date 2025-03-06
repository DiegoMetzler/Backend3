import request from "supertest";
import app from "../src/server.js";

describe("Adoption API", () => {
    test("GET /api/adoption - Retorna todas las adopciones", async () => {
        const response = await request(app).get("/api/adoption");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test("POST /api/adoption - Crea una nueva adopción", async () => {
        const newAdoption = { userId: "123456", petId: "654321" };
        const response = await request(app).post("/api/adoption").send(newAdoption);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("id");
    });
});