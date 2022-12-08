import { GiAutoRepair } from "react-icons/gi";

type LogoProps = {
	size?: number;
};

const Logo = ({ size = 24 }: LogoProps) => {
	return (
		<div>
			<GiAutoRepair size={size} />
		</div>
	);
};

export default Logo;
