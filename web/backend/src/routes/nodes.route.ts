import { Router } from "express";
import type { RelayNode } from "shared";

export const nodesRouter = Router();

// TODO: back this with real storage (in-memory/db) once node registration is implemented.
const nodes: RelayNode[] = [];

nodesRouter.get("/nodes", (_req, res) => {
  res.json(nodes);
});
