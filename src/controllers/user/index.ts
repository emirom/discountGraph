import { Express } from "express";
import { initializeUsers } from "./initializeUsers";

export const userRoutes = (app: Express) => {
  app.get("/broker/login", initializeUsers);
};
