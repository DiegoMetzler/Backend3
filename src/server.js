import express from "express";
import adoptionRouter from "./routes/adoption.router.js";
import mocksRouter from "./routes/mocks.router.js";

const app = express();
app.use(express.json());

app.use("/api/adoption", adoptionRouter);
app.use("/api/mocks", mocksRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
