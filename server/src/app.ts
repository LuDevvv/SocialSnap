import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, SocialSnap!");
});

export default app;
