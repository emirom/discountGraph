import { Express } from "express";
import { getDiscount } from "./getDiscount";
import { initMockCategories } from "./initMockCategories";

export const categoryRoutes = (app: Express) => {
  app.get("/category/init", initMockCategories);
  app.get("/category/discount", getDiscount);
};
