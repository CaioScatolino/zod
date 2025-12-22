import express from "express";
import { z } from "zod";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

server.get("/posts", async (req, res) => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return res.json(data.length);
    })
    .catch((error) => console.error(error));
});

server.post("/user", (req, res) => {
  // processo
  const userSchema = z.object({
    name: z.string().min(2),
    age: z.number().min(18).max(120),
    email: z.email(),
  });

  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });
  }

  console.log("Processando...");
  console.log(result.data);

  res.status(201).json({ result: "User created" });
});

server.listen(3333, () => {
  console.log("Server running on port http://localhost:3333/");
});
