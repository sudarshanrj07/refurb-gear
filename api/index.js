import express from "express";
import "dotenv/config";
import { DBConnect } from "./utils/connection.js";

const { PORT, DB_URL } = process.env;

const app = express();
DBConnect(DB_URL);

app.get("/", (req, res) => {
	res.send("Hello from a diferent port");
});

app.listen(PORT, () => {
	console.log(`Connected to PORT: ${PORT}`);
});
