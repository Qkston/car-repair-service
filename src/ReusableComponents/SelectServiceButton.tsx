import styled from "styled-components";

const SelectServiceButton = () => {
	return <Button>Select a services</Button>;
};

const Button = styled.button`
	padding: 10px;
	gap: 10px;

	width: 174px;
	height: 51px;

	background: #f5f5f5;
	border: 2px solid #e9e743;
	border-radius: 33px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

	font-size: 16px;
	text-transform: capitalize;

	transition: 0.2s;
	cursor: pointer;

	&:hover {
		background: #e9e743;
	}
`;

export default SelectServiceButton;
