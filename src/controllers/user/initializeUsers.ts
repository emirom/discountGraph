import { Request, Response } from "express";

export const initializeUsers = async (_req: Request, res: Response) => {
  try {
    res.status(200).send("users initialized");
  } catch (error) {
    res.status(500).send("Delete symbols error:" + error);
  }
};
