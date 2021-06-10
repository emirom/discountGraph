import { Express } from "express";
import { initMockProducts } from "./create/initMockProducts";
import { getProductDiscountApi } from "./get/getProductDiscountApi";

export const productRoutes = (app: Express) => {
  app.get("/product/init", initMockProducts);
  app.get("/product/discount", getProductDiscountApi);
};
