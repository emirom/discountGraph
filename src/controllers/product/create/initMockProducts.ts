import { Request, Response } from "express";
import db, { Transaction } from "./../../../database";
import { insertTransactions } from "./insertTransactions";

export const initMockProducts = async (_req: Request, res: Response) => {
  try {
    await db.tx(async (db: Transaction) => await insertTransactions(db));

    // await db.dispose();
    res.status(200).send("products initialized");
  } catch (error) {
    res.status(500).send("products initialization error:" + error);
  }
};
