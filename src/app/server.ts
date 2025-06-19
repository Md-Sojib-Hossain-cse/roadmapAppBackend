const mongoose = require("mongoose");
import { Server } from "http";
import app from "./app";

const port = 5000;

let server: Server;

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

async function bootstrap() {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
