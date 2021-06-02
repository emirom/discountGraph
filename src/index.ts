import { startServer } from "./server";
import { userRoutes } from "./controllers/user/index";
(async function () {
  try {
    const { app } = await startServer();

    userRoutes(app);
  } catch (error) {
    console.log("______index_error______", error);
  }
})();
