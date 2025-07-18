import express from "express";
import "dotenv/config";
import { DBConnect } from "./utils/connection.js";
import routes from "./routes/routes.js";

//dotenv
const { PORT, DB_URL } = process.env;

const app = express();

//DB connection
DBConnect(DB_URL).catch(() => {
	console.log("DB connection request failed");
});

//gloabla middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("Hello from a diferent port");
});

app.listen(PORT);
