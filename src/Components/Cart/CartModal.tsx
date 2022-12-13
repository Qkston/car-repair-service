import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Input, List, ListItem, ListItemText } from "@mui/material";
import { CgShoppingCart, CgTrash } from "react-icons/cg";
import { Service } from "../Services/Services";
import Typography from "@mui/material/Typography";

type CartModalProps = {
	open: boolean;
	selectedServices: Service[];
	customerEmail: string;
	onClose: () => void;
	onRemoveService: (service: Service) => void;
	setCustomerEmail: (email: string) => void;
	onCreateOrder: () => Promise<void>;
};

type CustomListItemProps = {
	id: number;
	price: string;
	name: string;
};

const CartModal = ({ open, selectedServices, customerEmail, onClose, onRemoveService, setCustomerEmail, onCreateOrder }: CartModalProps) => {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const CustomListItem = ({ price, name, id }: CustomListItemProps) => {
		return (
			<ListItem
				sx={{
					mb: "10px",
					height: 60,
					background: "#f5f5f5",
					borderRadius: 2,
					transition: "0.2s",
					cursor: "pointer",

					":hover": {
						background: "#d6d4d4",
					},
				}}
				secondaryAction={
					<IconButton onClick={() => onRemoveService({ price, name, id })} edge="end">
						<CgTrash />
					</IconButton>
				}>
				<ListItemText sx={{ width: "50%" }} primary={name} />
				<ListItemText
					primary={`${price} UAH.`}
					sx={{
						width: "50%",
						".css-10hburv-MuiTypography-root": { fontWeight: "bold" },
					}}
				/>
			</ListItem>
		);
	};

	return (
		<Dialog PaperProps={{ style: { width: 600 } }} open={open} keepMounted onClose={onClose}>
			<DialogTitle sx={{ fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>
				Services cart
				<CgShoppingCart style={{ marginLeft: 10 }} size={18} />
			</DialogTitle>
			<DialogContent>
				<List>
					{selectedServices.length > 0 ? (
						selectedServices.map(s => <CustomListItem {...s} key={s.id} />)
					) : (
						<ListItem>
							<ListItemText sx={{ width: "100%", textAlign: "center" }} primary={"No services are selected"} />
						</ListItem>
					)}
				</List>
			</DialogContent>
			{selectedServices.length > 0 && (
				<DialogActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px 20px" }}>
					<Typography sx={{ fontWeight: "bold" }}>Total: {selectedServices.reduce((prev, curr) => +curr.price + prev, 0)} UAH.</Typography>
					<Input
						value={customerEmail}
						onChange={(props: any) => setCustomerEmail(props.target.value)}
						placeholder={"Enter your email..."}
						error={customerEmail.length > 0 && !String(customerEmail).toLowerCase().match(emailRegex)}
					/>
					<Button disabled={!String(customerEmail).toLowerCase().match(emailRegex)} onClick={onCreateOrder}>
						Buy
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default CartModal;
