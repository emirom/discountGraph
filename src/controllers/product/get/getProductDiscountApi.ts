import { Request, Response } from "express";
import db from "../../../database";
import { getProductDiscount } from "./getProductDiscount";

/**
 * the function that is called from the route
 *
 * @param req the express request parameter which is used to get the id of product
 * @param res returns the discount of product if is available.
 */
export const getProductDiscountApi = async (req: Request, res: Response) => {
  try {
    if (!req.query.id) throw new Error("please provide the product id.");
    const discount = await getProductDiscount(db, req.query.id as string);
    res.status(200).send("the product discount: " + discount);
  } catch (error) {
    res.status(500).send("get product error: " + error);
  }
};
