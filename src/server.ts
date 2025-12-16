import express from "express";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/ping", (req, res) => {
  return res.json({ message: "pong" });
});

server.listen(3333, () => {
  console.log("Server running on port http://localhost:3333/");
});
