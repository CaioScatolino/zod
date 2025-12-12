import z from "zod";

const pattern = z.object({
  name: z.literal("John"),
});

const result = pattern.parse({
  name: "John",
});

console.log(result);
