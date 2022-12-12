const express = require("express");
const { Client } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());

const client = new Client({
	host: "127.0.0.1",
	user: "postgres",
	password: "8080",
	database: "car-repair-service",
});
client.connect();

app.get("/api/services", (req, res) => {
	client.query(`SELECT * FROM car_services`, (err, result) => {
		if (err) throw err + console.log(`NOT CONNECTED! ${err}`);
		console.log("Connected!");

		res.send(result.rows);
	});
});

app.listen(5000);
