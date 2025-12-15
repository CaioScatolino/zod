import z from "zod";

const schema = z.object({
  name: z.string().min(2),
  age: z.number().gte(18, 'Precisa ser maior de 18').int(),
  email: z.email(),
  status: z.boolean().default(true),
  characteristics: z.object({
    strength: z.number().min(1).max(10),
    agility: z.number().min(1).max(10),
    intelligence: z.number().min(1).max(10),
  }),
});

type User = z.infer<typeof schema>;

let data: User = {
  name: "John",
  age: 11,
  email: "john@example.com",
  status: true,
  characteristics: {
    strength: 10,
    agility: 5,
    intelligence: 4,
  },
};

const result = schema.safeParse(data);

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.issues);
}
