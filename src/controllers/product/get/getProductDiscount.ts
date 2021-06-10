import { ConnectionPool, sql, Transaction } from "../../../database";

/**
 * the query returns the product discount
 *
 * @param db the connection to connect with to the database and do the transaction
 * @param id the id of product which we are querying for its discount
 *
 * @returns the discount which is a number, which is the product discount if is available,
 * otherwise the is the discount of nearest node(category)'s discount.
 */
export const getProductDiscount = async (
  db: ConnectionPool | Transaction,
  id: Number | string
): Promise<Number | undefined> => {
  const result = await db.query(
    sql`
        SELECT discount, graph_discount
        FROM products
        WHERE id = ${id}
      `
  );
  console.log(result[0]);

  return result[0]?.discount ? result[0]?.discount : result[0]?.graph_discount;
};
