import { useEffect, useState } from "react";
import ServiceComponent from "../../ReusableComponents/ServiceComponent";
import images from "./data";
import { getServices } from "../../services/car_services";
import "./Services.scss";

type ServicesProps = {
	selectedServices: Service[];
	onSelectService: (service: Service) => void;
	onRemoveService: (service: Service) => void;
};

export interface Service {
	id: number;
	name: string;
	price: string;
}

const Services = ({ selectedServices, onSelectService, onRemoveService }: ServicesProps) => {
	const [allServices, setAllServices] = useState<Service[]>([]);

	useEffect(() => {
		async function getAllServices() {
			try {
				const services = await getServices();
				setAllServices(services);
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
				{allServices.map((s, i) => {
					const isAdded = selectedServices.some(({ id }) => s.id === id);
					return (
						<ServiceComponent
							key={s.id}
							{...s}
							imageURL={images[i]}
							onClick={service => (isAdded ? onRemoveService(service) : onSelectService(service))}
							isAdded={isAdded}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
