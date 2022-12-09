import "./Header.scss";
import Logo from "../../ReusableComponents/Logo";
import SelectServiceButton from "../../ReusableComponents/SelectServiceButton";

const Header = () => {
	return (
		<>
			<div className="header">
				<div className="header-logo">
					<Logo size={64} />
					<span className="header-logo-text">Car Repair Service</span>
				</div>
				<div className="header-nav-menu">
					<div className="header-nav-menu-item">
						<span className="header-nav-menu-item-text">Home</span>
					</div>
					<div className="header-nav-menu-item">
						<span className="header-nav-menu-item-text">Services</span>
					</div>
					<div className="header-nav-menu-item">
						<span className="header-nav-menu-item-text">Cart</span>
					</div>
					<div className="header-nav-menu-item login">
						<span className="header-nav-menu-item-text login-text">Login</span>
					</div>
				</div>
			</div>
			<div className="select-service-wrapper">
				<div className="select-service-label">
					<SelectServiceButton />
				</div>
			</div>
		</>
	);
};

export default Header;
