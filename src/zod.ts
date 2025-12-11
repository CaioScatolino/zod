import z from "zod";

const schema = z.object({
  name: z.string().min(2),
  age: z.number().min(18).max(120),
  email: z.email(),
});

let data = schema.parse({
  name: "John",
  age: 20,
  email: "john@example.com",
});

console.log(data);