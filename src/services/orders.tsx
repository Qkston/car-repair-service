import axios from "axios";

const base_URL = "http://127.0.0.1:5000/api/";

export type PostOrderProps = {
	services_names: string;
	customer_email: string;
	total_price: string;
	order_time: Date;
};

export const postOrder = async (orderData: PostOrderProps) => {
	await axios.post(`${base_URL}order/create`, orderData);
};

export const sendMail = async (orderData: PostOrderProps) => {
	await axios.post(`${base_URL}mail/send`, orderData);
};
