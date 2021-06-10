import { sql, Transaction } from "../../../database";
import { ICategory } from "../../../mockData/categories";

export const insertCategory = async (
  category: ICategory,
  db: Transaction,
  traverseDiscount: Number | undefined
) => {
  try {
    const graphDiscount = category.discount
      ? category.discount
      : traverseDiscount;
    await db.query(sql`
        INSERT INTO categories(name, discount, graph_discount) 
        VALUES (${category.name}, ${category.discount}, ${graphDiscount}); 
      `);

    return graphDiscount;
  } catch (error) {
    console.log("category insert error:" + error);
    return error;
  }
};
