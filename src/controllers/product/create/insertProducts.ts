import { sql, Transaction } from "@databases/pg";
import { IProduct } from "../../../mockData/products";
import { getCategoryDiscount } from "../../category/get/getCategoryDiscount";

/**
 * takes a bunch of products and inserts them all into the db.
 *
 * @param products are read from the mock data and passed to this function
 * @param db  the connection to connect with to the database and do the transaction
 */
export const insertProducts = async (products: IProduct[], db: Transaction) => {
  try {
    await Promise.all(
      products.map(
        async (product) =>
          //To run multiple queries in a single transaction, you can call .tx
          await insertProduct(product, db)
      )
    );
  } catch (error) {
    console.log("insert products error: " + error);
  }
};

/**
 * do a transaction and insert a product into the db
 *
 * @param product a single product which is passed to this function to be inserted into the db
 * @param db  the connection to connect with to the database and do the transaction
 */
const insertProduct = async (product: IProduct, db: Transaction) => {
  try {
    const graph_discount = await getCategoryDiscount(db, product.categoryId);

    await db.query(
      sql`INSERT INTO products(name, discount, categoryId, graph_discount ) VALUES
      (${product.name}, ${product.discount}, ${product.categoryId}, ${graph_discount}) `
    );
  } catch (error) {
    console.log("insert product error: " + error);
  }
};
