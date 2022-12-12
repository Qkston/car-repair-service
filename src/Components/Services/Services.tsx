import ServiceComponent from "../../ReusableComponents/ServiceComponent";
import services from "./data";
import "./Services.scss";

const Services = () => {
	return (
		<div id="services" className="services">
			<h3 className="services-title">Our services</h3>
			<div className="services-main">{services.map(ServiceComponent)}</div>
		</div>
	);
};

export default Services;
