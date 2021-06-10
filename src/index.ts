import { categoryRoutes } from "./controllers/category";
import { productRoutes } from "./controllers/product";
import { startServer } from "./server";

(async function () {
  try {
    const app = await startServer();

    categoryRoutes(app);
    productRoutes(app);
  } catch (error) {
    console.log("______index_error______", error);
  }
})();
