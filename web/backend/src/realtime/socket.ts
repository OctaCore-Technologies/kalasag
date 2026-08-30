import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";

// TODO: emit node/coverage updates to connected web console clients as data changes.
export function createSocketServer(httpServer: HttpServer) {
  return new Server(httpServer, {
    cors: { origin: "*" },
  });
}
