import dotenv from "dotenv";
import express, { Request, Response } from "express";

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

    app.get("/", welcome);

    return app;
  } catch (error) {
    console.log("\nError on start server: " + error);
    return error;
  }
};

const welcome = (_req: Request, res: Response) =>
  res.status(200).send("welcome to our cool app");
