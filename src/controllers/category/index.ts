import { Express } from "express";
import { getCategoryDiscountApi } from "./get/getCategoryDiscount";

export const categoryRoutes = (app: Express) => {
  app.get("/category/discount", getCategoryDiscountApi);
};
