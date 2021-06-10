import { sql, Transaction } from "../../../database";
import categories from "../../../mockData/categories";
import products from "../../../mockData/products";
import { insertCategories } from "../../category/create/initMockCategories";
import { insertProducts } from "./insertProducts";

/**
 * checks if the categories and products are created and inserts the products
 * @param db
 */
export const insertTransactions = async (db: Transaction) => {
  try {
    await insertCategories(categories, db);

    //read products
    await db.query(sql.file(__dirname + "/../sql/createProduct.sql"));
    await insertProducts(products, db);
  } catch (error) {
    console.log("insert transaction error: " + error);
  }
};
