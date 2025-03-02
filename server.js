import express from "express";
import mongoose from "mongoose";
import mocksRouter from "./routes/mocks.router.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mocksDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error en la conexión a MongoDB", err));

app.use("/api/mocks", mocksRouter);

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
