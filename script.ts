import z from "zod";

const pattern = z.object({
  name: z.string().min(2).toUpperCase(),
  age: z.number().min(18).max(120),
  email: z.email().toLowerCase(),
  description: z.string().trim(),
  date: z.date(),
  imagem: z.string().endsWith(".png"),
});

const result = pattern.parse({
  name: "John",
  age: 20,
  email: "JOHN@example.com",
  description: "     a qwe  q      ",
  date: new Date("2025-12-12"),
  imagem: "wp_123.png",
});

console.log(result);
