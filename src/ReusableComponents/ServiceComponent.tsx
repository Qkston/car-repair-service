import styled from "styled-components";
import { Service } from "../Components/Services/Services";

type ServiceComponentProps = {
	imageURL: string;
	id: number;
	price: string;
	name: string;
	isAdded?: boolean;
	onClick: (service: Service) => void;
};

const ServiceComponent = ({ imageURL, id, price, name, isAdded, onClick }: ServiceComponentProps) => {
	return (
		<Wrapper key={imageURL + price + name}>
			<Header>
				<Image src={imageURL} alt="Service's image" />
				<Number>{price} UAH.</Number>
			</Header>
			<Title>{name}</Title>
			<AddButton isAdded={!!isAdded} onClick={() => onClick({ id, name, price })}>
				{isAdded ? "In the cart" : "Add to cart"}
			</AddButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	padding: 50px 25px;
	border: 1px solid #21354666;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
	height: 96px;
`;

const Image = styled.img`
	height: 80%;
`;

const Number = styled.p`
	font-size: 32px;
	font-weight: bold;
`;

const Title = styled.p`
	font-size: 32px;
	color: #000000cc;
	margin-bottom: 30px;
`;

const AddButton = styled.button`
	position: absolute;
	bottom: 50px;

	width: 200px;
	height: 50px;
	background: ${(props: { isAdded: boolean }) => (props.isAdded ? "#e9e743" : "#f5f5f5")};
	border: 2px solid #e9e743;
	border-radius: 10px;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	letter-spacing: 0.1em;
	color: #1f1f1f;

	transition: 0.2s;
	cursor: pointer;

	&:hover {
		background: ${(props: { isAdded: boolean }) => (props.isAdded ? "#f5f5f5" : "#e9e743")};
	}
`;

export default ServiceComponent;
