import { useEffect, useState } from "react";
import ServiceComponent from "../../ReusableComponents/ServiceComponent";
import images from "./data";
import { getServices } from "../../services/car_services";
import "./Services.scss";

interface Service {
	id: number;
	name: string;
	price: string;
}

const Services = () => {
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		async function getAllServices() {
			try {
				const services = await getServices();
				setServices(services);
			} catch (err) {
				console.log(err);
			}
		}

		getAllServices();
	}, []);

	return (
		<div id="services" className="services">
			<h3 className="services-title">Our services</h3>
			<div className="services-main">
				{services.map((s, i) => (
					<ServiceComponent {...s} imageURL={images[i]} />
				))}
			</div>
		</div>
	);
};

export default Services;
