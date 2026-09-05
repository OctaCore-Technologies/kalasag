import cors from "cors";
import express from "express";
import { coverageRouter } from "./routes/coverage.route.js";
import { healthRouter } from "./routes/health.route.js";
import { nodesRouter } from "./routes/nodes.route.js";

/**
 * Creates and configures the Express application with all routes and middleware.
 *
 * @returns {express.Express} The configured Express application instance
 */
export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(healthRouter);
  app.use(nodesRouter);
  app.use(coverageRouter);

  return app;
}
