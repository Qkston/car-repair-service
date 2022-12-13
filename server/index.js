const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const bodyParser = require("body-parser");

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

const jsonParser = bodyParser.json();

app.post("/api/order/create", jsonParser, (req, res) => {
	const services = req.body.services_names;
	const email = req.body.customer_email;
	const price = req.body.total_price;
	const time = req.body.order_time;

	const query = `INSERT INTO orders (services_names, customer_email, order_time, total_price) VALUES('${services}','${email}','${time}','${price}');`;

	client.query(query, (err, result) => {
		if (err) throw err + console.log(`NOT CREATED! ${err}`);
		console.log("Created!");

		res.send(result.rows);
	});
});

app.listen(5000);
