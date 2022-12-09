import SelectServiceButton from "../../ReusableComponents/SelectServiceButton";
import image from "./image.png";
import "./Main.scss";

const Main = () => {
	return (
		<div className="main">
			<p className="main-title">Car repair at your door step</p>
			<SelectServiceButton />
			<input type="image" src={image} alt="Main image" className="main-image" />
		</div>
	);
};

export default Main;
