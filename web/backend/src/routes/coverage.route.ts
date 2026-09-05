import { Router } from "express";
import { getCoverageGaps } from "../services/coverage.service.js";
import { suggestNextPlacement } from "../services/placement.service.js";

/**
 * Express router for coverage analysis endpoints.
 * GET /coverage/gaps - Returns areas with insufficient coverage
 * GET /coverage/suggestion - Returns optimal placement suggestions for next node
 */
export const coverageRouter = Router();

coverageRouter.get("/coverage/gaps", (_req, res) => {
  res.json(getCoverageGaps());
});

coverageRouter.get("/coverage/suggestion", (_req, res) => {
  res.json(suggestNextPlacement());
});
