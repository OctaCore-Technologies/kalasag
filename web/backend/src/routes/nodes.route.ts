import { Router } from "express";
import type { RelayNode } from "shared";

/**
 * Express router for relay node endpoints.
 * GET /nodes - Returns list of all registered relay nodes
 */
export const nodesRouter = Router();

// TODO: back this with real storage (in-memory/db) once node registration is implemented.
const nodes: RelayNode[] = [];

nodesRouter.get("/nodes", (_req, res) => {
  res.json(nodes);
});
