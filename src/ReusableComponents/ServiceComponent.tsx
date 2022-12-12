import styled from "styled-components";

type ServiceComponentProps = {
	imageURL: string;
	price: string;
	title: string;
};

const ServiceComponent = ({ imageURL, price, title }: ServiceComponentProps) => {
	return (
		<Wrapper key={imageURL + price + title}>
			<Header>
				<Image src={imageURL} alt="Service's image" />
				<Number>{price} UAH.</Number>
			</Header>
			<Title>{title}</Title>
			<Button>Enquire Us</Button>
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

const Button = styled.button`
	position: absolute;
	bottom: 50px;

	width: 200px;
	height: 50px;
	background: #f5f5f5;
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
		background: #e9e743;
	}
`;

export default ServiceComponent;
