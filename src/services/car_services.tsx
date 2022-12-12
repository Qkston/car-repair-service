import axios from "axios";

const base_URL = "http://127.0.0.1:5000/api/";

export const getServices = async () => {
	const res = await axios.get(`${base_URL}services`);
	return res.data;
};
