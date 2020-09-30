import React, { useState } from "react";
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import MobileMenuSlider from "@material-ui/core/Drawer";
import Footer from './Footer'
import {
	AppBar,
	Avatar,
	Box,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@material-ui/core";
import {
	Menu,
	AlternateEmail,
	Description,
	Home,
	Work,
} from "@material-ui/icons";
import avatar from "../images/react-icon.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: "rgb(0,0,0,0.95)",
		height: "100%",
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
	homeButton: {
		color: "#00d8ff",
		position: "absolute",
		right: "25px",
	},
	listItem: {
		padding: "16px 30px !important",
		color: "#eee",
		"&:hover": {
			background: "#222",
		},
	},
	toolbar: {
		background: "rgb(0,0,0,0.95)",
		color: "#fff",
	},
}));

const menuItems = [
	{
		itemIcon: <Home />,
		itemText: "Home",
		itemPath: "/",
	},
	{
		itemIcon: <Description />,
		itemText: "Experience",
		itemPath: "/experience",
	},
	{
		itemIcon: <Work />,
		itemText: "Projects",
		itemPath: "/projects",
	},
	{
		itemIcon: <AlternateEmail />,
		itemText: "Contact",
		itemPath: "/contact",
	},
];

const Navbar = () => {
	const [state, setState] = useState({
		left: false,
	});

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};

	const classes = useStyles();

	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component="div"
			onClick={toggleSlider(slider, false)}
		>
			<Avatar className={classes.avatar} src={avatar} alt="React icon" />
			<Divider style={{ background: "#222" }} />
			<List>
				{menuItems.map((item, key) => (
					<ListItem
						button
						key={key}
						component={Link}
						to={item.itemPath}
						className={classes.listItem}
					>
						<ListItemIcon style={{ color: "#eee" }}>
							{item.itemIcon}
						</ListItemIcon>
						<ListItemText primary={item.itemText}/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component="nav">
				<AppBar position="static" style={{ background: "#fff" }}>
					<Toolbar className={classes.toolbar}>
						<IconButton
							onClick={toggleSlider("left", true)}
							style={{ color: "#00d8ff" }}
						>
							<Menu />
						</IconButton>
						<MobileMenuSlider
							anchor="left"
							open={state.left}
							onClose={toggleSlider("left", false)}
						>
							{sideList("left")}
							<Footer />
						</MobileMenuSlider>
						<IconButton
							className={classes.homeButton}
							component={Link}
							to={"/"}
						>
							<Home />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
