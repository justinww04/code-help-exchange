import { Router } from "express";

const router = Router();

// fake in-memory problems
const problems = [
  { id: 1, title: "React state not updating", description: "Why isn’t my state updating on click?" },
  { id: 2, title: "Node fetch error", description: "Getting ECONNREFUSED when calling API." }
];

router.get("/", (req, res) => {
  res.json(problems);
});

export default router;