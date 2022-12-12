import "./AboutUs.scss";
import wind from "./Wind.png";

type PointProps = {
	number: string;
	title: string;
	description: string;
};

const AboutUs = () => {
	const firstPointDesc =
		"Established in 2016, with a Vision to Provide Customers Transparent, Convenient and Reliable Car Service and Repair right at Customer Doorstep in Hyderabad";
	const secondPointDesc = "Car owners often lack visibility regarding the quality of Mechanics, usage of Spare parts and Transparency in price.";
	const thirdPointDesc =
		"Now, Metre Per Second is a Premier Doorstep Car Care Company providing Car Service with Professional Technicians right at your location in Hyderabad.";

	const Point = ({ description, number, title }: PointProps) => {
		return (
			<div className="point">
				<p className="point-number">{number}</p>
				<p className="point-title">{title}</p>
				<p className="point-description">{description}</p>
			</div>
		);
	};

	return (
		<div id="about-us" className="wrapper">
			<div className="about-us">
				<div className="about-us-header">
					<input type="image" src={wind} alt="Image" className="about-us-header-image" />
					<div className="about-us-header-text">
						<h3 className="about-us-header-text-title">about us</h3>
						<p className="about-us-header-text-description">At meter per second, we take pride in our values</p>
						<p className="about-us-header-text-description">- service,integrity and excellece.</p>
					</div>
					<input type="image" src={wind} alt="Image" className="about-us-header-image" />
				</div>
				<div className="about-us-points-wrapper">
					{<Point number="1." title="Who we are?" description={firstPointDesc} />}
					{<Point number="2." title="What is the problem?" description={secondPointDesc} />}
					{<Point number="3." title="How do we help?" description={thirdPointDesc} />}
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
