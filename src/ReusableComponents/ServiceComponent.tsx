import styled from "styled-components";

type ServiceComponentProps = {
	imageURL: string;
	number: string;
	title: string;
};

const ServiceComponent = ({ imageURL, number, title }: ServiceComponentProps) => {
	return (
		<Wrapper>
			<Header>
				<Image src={imageURL} alt="Service's image" />
				<Number>{number}</Number>
			</Header>
			<Title>{title}</Title>
			<Button>Enquire Us</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 50px 25px;
	border: 1px solid #21354666;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const Image = styled.img`
	width: 64px;
	height: 64px;
`;

const Number = styled.p`
	font-size: 32px;
	color: #e5e5e5;
`;

const Title = styled.p`
	font-size: 32px;
	color: #000000cc;
	margin-bottom: 30px;
`;

const Button = styled.button`
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
`;

export default ServiceComponent;
