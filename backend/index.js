// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connection from "./database/db.js";
// import Router from "./routes/route.js";
// const app = express();

// dotenv.config();
// const PORT = 8000;
// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
// connection(USERNAME, PASSWORD);

// // app.use();
// app.use(cors({ origin: true, credentials: true }));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use("/", Router);
// app.listen(PORT, () =>
//   console.log(`server is running successfully on PORT ${PORT}`)
// );
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// // require = require("esm")(module);

import connectToMongo from "./database/db.js";
import express from "express";
import cors from "cors";
import Router from "./database/db.js";
const app = express();
app.use(cors());
import dotenv from "dotenv";
dotenv.config({ path: "./backend/config.env" });

connectToMongo();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", Router);

app.listen(port, () => {
  console.log(`Native Vibes backend listening on port ${port}`);
});
