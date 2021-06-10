import { Request, Response } from "express";
import db, { ConnectionPool, sql, Transaction } from "../../../database";

export const getCategoryDiscountApi = async (req: Request, res: Response) => {
  try {
    const discount = await getCategoryDiscount(db, req.params.id);
    console.log(req.params.id);

    res.status(200).send("the category discount: " + discount);
  } catch (error) {
    res.status(500).send("get category error: " + error);
  }
};

export const getCategoryDiscount = async (
  db: ConnectionPool | Transaction,
  id: Number | String
) => {
  const result = await db.query(
    sql`
      SELECT graph_discount 
      FROM categories
      WHERE id = ${id}
    `
  );
  return result[0]?.graph_discount;
};
