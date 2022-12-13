import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.scss";
import AboutUs from "./Components/AboutUs/AboutUs";
import CartModal from "./Components/Cart/CartModal";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Services, { Service } from "./Components/Services/Services";
import { postOrder, PostOrderProps } from "./services/orders";

function App() {
	const [openCartModal, setOpenCartModal] = useState<boolean>(false);
	const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
	const [selectedServices, setSelectedServices] = useState<Service[]>([]);
	const [customerEmail, setCustomerEmail] = useState<string>("");

	useEffect(() => {
		if (!localStorage.getItem("services")) localStorage.setItem("services", JSON.stringify([]));
		else setSelectedServices(JSON.parse(localStorage.getItem("services") || "") || []);
	}, []);

	useEffect(() => {
		if (!openCartModal) setCustomerEmail("");
	}, [openCartModal]);

	const onSelectService = (service: Service) => {
		const services = [...selectedServices, service];

		localStorage.setItem("services", JSON.stringify(services));
		setSelectedServices(services);
	};

	const onRemoveService = (service: Service) => {
		const services = selectedServices.filter(({ id }) => id !== service.id);

		localStorage.setItem("services", JSON.stringify(services));
		setSelectedServices(services);
	};

	const onCreateOrder = async () => {
		const data: PostOrderProps = {
			services_names: selectedServices.map(s => s.name).join(","),
			customer_email: customerEmail,
			total_price: selectedServices.reduce((prev, curr) => +curr.price + prev, 0).toString(),
			order_time: new Date(),
		};

		await postOrder(data).then(() => {
			localStorage.setItem("services", JSON.stringify([]));
			setSelectedServices([]);
			setOpenCartModal(false);
			setOpenSnackbar(true);
		});
	};

	return (
		<div className="app">
			<Header onOpenCart={() => setOpenCartModal(true)} />
			<Main />
			<AboutUs />
			<Services selectedServices={selectedServices} onSelectService={onSelectService} onRemoveService={onRemoveService} />
			<CartModal
				open={openCartModal}
				selectedServices={selectedServices}
				customerEmail={customerEmail}
				onClose={() => setOpenCartModal(false)}
				onRemoveService={onRemoveService}
				setCustomerEmail={setCustomerEmail}
				onCreateOrder={onCreateOrder}
			/>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={() => setOpenSnackbar(false)}>
				<Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
					Your order has been successfully accepted. A manager will contact you shortly.
				</Alert>
			</Snackbar>
		</div>
	);
}

export default App;
