import { Router } from "express";

/**
 * Express router for health check endpoint.
 * GET /health - Returns server health status
 */
export const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
