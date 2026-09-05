import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";

/**
 * Creates and configures a Socket.IO server for real-time node and coverage updates.
 *
 * @param {HttpServer} httpServer - The HTTP server instance to attach Socket.IO to
 * @returns {Server} The configured Socket.IO server instance
 */
// TODO: emit node/coverage updates to connected web console clients as data changes.
export function createSocketServer(httpServer: HttpServer) {
  return new Server(httpServer, {
    cors: { origin: "*" },
  });
}
