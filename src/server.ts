import express from "express";
import dotenv from "dotenv";
// import bodyParser from "bodyparser";

export const startServer = async () => {
  try {
    dotenv.config();
    const app = express();
    app.use(express.json());

    app.listen(process.env.APP_PORT, () =>
      console.log(
        `app is ready and listening on http://localhost:${process.env.APP_PORT}`
      )
    );

    app.get("/", (req, res) => {
      console.log(req);
      return res.send("Welcome to the offland app!");
    });

    return { app };
  } catch (error) {
    console.log("\nError on start server: " + error);
    return error;
  }
};
