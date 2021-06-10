import { sql, Transaction } from "../../../database";
import { ICategory } from "../../../mockData/categories";
import { insertCategory } from "./insertCategory";

/**
 *
 * @param categories are read from the mock data and passed to be inserted into the db
 * @param db
 * @returns
 */
export const insertCategories: (
  categories: ICategory[],
  db: Transaction
) => Promise<Number | undefined> = async (categories, db) => {
  try {
    // const query = sql.file(__dirname + "./../sql/createCategory.sql");
    await db.query(
      sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(45) NOT NULL,
        parent_id INTEGER,
        discount INTEGER,
        graph_discount INTEGER
      );`
    );

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
  } catch (error) {
    console.log("insert categories error: " + error);

    return error;
  }
};
