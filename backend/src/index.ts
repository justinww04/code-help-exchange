import express from "express";
import cors from "cors";
import problemsRouter from "./routes/problems";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/problems", problemsRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});