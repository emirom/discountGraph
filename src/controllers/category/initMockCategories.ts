import { Request, Response } from "express";
// import fs from "fs";
import db, { sql, ConnectionPool, Transaction } from "../../database";
import categories, { ICategory } from "../../mockData/categories";

export const initMockCategories = async (_req: Request, res: Response) => {
  try {
    await db.query(sql.file(__dirname + "/sql/createCategory.sql"));
    // fs.readFileSync(__dirname + '/sql/createCategory.sql', 'utf8')

    const graphDiscount = await insertCategories(categories, db);

    await db.dispose();
    res
      .status(200)
      .send("category initialized, graphDiscount: " + graphDiscount);
  } catch (error) {
    res.status(500).send("category initialization error:" + error);
  }
};

const insertCategories: (
  categories: ICategory[],
  db: ConnectionPool
) => Promise<Number | undefined> = async (categories, db) => {
  let graphDiscount: Number | undefined;
  Promise.all(
    categories.map(
      async (category) =>
        //To run multiple queries in a single transaction, you can call .tx
        (graphDiscount = await db.tx(
          async (db) => await insertCategory(category, db, graphDiscount)
        ))
    )
  );
  return graphDiscount;
};

const insertCategory = async (
  category: ICategory,
  db: Transaction,
  graphDiscount: Number | undefined
) => {
  await db.query(
    sql`INSERT INTO categories(name, discount, parentId) VALUES
      (${category.name}, ${category.discount}, ${category.parentId}) RETURNING *
    `
  );
  return category.discount ? category.discount : graphDiscount;
};
