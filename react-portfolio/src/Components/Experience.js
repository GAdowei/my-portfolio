import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#000",
	},
	pageHeading: {
		color: "#fff",
		fontSize: "2rem",
		textAlign: "center",
		textTransform: "uppercase",
		padding: "1rem 0 3rem 0",
	},
	itemHeading: {
		color: "#fff",
		marginBottom: "1rem",
		padding: "0",
		fontSize: "1.2rem",
		textTransform: "uppercase",
	},
	title: {
		color: "#00d8ff",
		fontSize: "1rem",
		fontStyle: "italic",
		marginBottom: "1rem",
	},
	subtitle: {
		fontWeight: "bold",
		color: "#00d8ff",
	},
	body: {
		color: "#fff",
		fontSize: "0.85rem",
	},
	timeline: {
		position: "relative",
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid #fff",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timelineItem: {
		padding: "1rem 3rem 2rem 3rem",
		borderBottom: "1px solid #fff",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% -5px)",
			borderStyle: "solid",
			borderColor: "#00d8ff #00d8ff transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "#00d8ff",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent #00d8ff #00d8ff ",
			},
		},
	},
	timelineYear: {
		textAlign: "center",
		maxWidth: "7.75rem",
		margin: "0 3rem 0 auto",
		border: "1px solid #00d8ff",
		borderRadius: "0.5rem",
		fontSize: "1.5rem",
		background: "#111",
		color: "#00d8ff",
		lineHeight: 1.5,
		padding: "0",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
}));

const Experience = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			<Box component="header" className={classes.mainContainer}>
				<Typography variant="h6" className={classes.pageHeading}>
					experience
				</Typography>
				<Box component="div" className={classes.timeline}>
					{/* YEAR */}
					<Typography
						variant="h4"
						className={`${classes.timelineYear} ${classes.timelineItem}`}
					>
						2020
					</Typography>
					<Box component="div" className={classes.timelineItem}>
						{/* JOB ROLE */}
						<Typography
							variant="h5"
							className={classes.itemHeading}
						>
							react developer
						</Typography>
						{/* COMPANY NAME */}
						<Typography variant="body1" className={classes.title}>
							gasdigital.io
						</Typography>
						{/* JOB DESCRIPTION */}
						<Typography
							variant="subtitle1"
							className={classes.body}
						>
							<span className={classes.subtitle}>
								<strong>Description: </strong>
							</span>
							Building websites for clients with React and Redux,
							designing frontend UIs with Material design
							frameworks
							<br />
							<span className={classes.subtitle}></span>
							<span className={classes.subtitle}>
								<strong>Core technologies: </strong>
							</span>
							React, Redux
						</Typography>
					</Box>
					{/* YEAR */}
					<Typography
						variant="h4"
						className={`${classes.timelineYear} ${classes.timelineItem}`}
					>
						2019
					</Typography>
					<Box component="div" className={classes.timelineItem}>
						{/* JOB ROLE */}
						<Typography
							variant="h5"
							className={classes.itemHeading}
						>
							javascript developer
						</Typography>
						{/* COMPANY NAME */}
						<Typography variant="body1" className={classes.title}>
							newhomes.com.ng
						</Typography>
						{/* JOB DESCRIPTION */}
						<Typography
							variant="subtitle1"
							className={classes.body}
						>
							<span className={classes.subtitle}>
								<strong>Description: </strong>
							</span>
							Interacted with Google API (maps, fonts), wrote
							scripts for frontend components functionality
							<br />
							<span className={classes.subtitle}></span>
							<span className={classes.subtitle}>
								<strong>Core technologies: </strong>
							</span>
							Javascript
						</Typography>
					</Box>
					{/* YEAR */}
					<Typography
						variant="h4"
						className={`${classes.timelineYear} ${classes.timelineItem}`}
					>
						2018
					</Typography>
					<Box component="div" className={classes.timelineItem}>
						{/* JOB ROLE */}
						<Typography
							variant="h5"
							className={classes.itemHeading}
						>
							web designer
						</Typography>
						{/* COMPANY NAME */}
						<Typography variant="body1" className={classes.title}>
							707digital.com
						</Typography>
						{/* JOB DESCRIPTION */}
						<Typography
							variant="subtitle1"
							className={classes.body}
						>
							<span className={classes.subtitle}>
								<strong>Description: </strong>
							</span>
							Designed simple button, menu & navbar components for
							webpages with CSS/Bootstrap
							<br />
							<span className={classes.subtitle}></span>
							<span className={classes.subtitle}>
								<strong>Core technologies: </strong>
							</span>
							HTML5, CSS3/Bootstrap5, Javascript
						</Typography>
					</Box>
					{/* YEAR */}
					<Typography
						variant="h4"
						className={`${classes.timelineYear} ${classes.timelineItem}`}
					>
						2017
					</Typography>
					<Box component="div" className={classes.timelineItem}>
						{/* JOB ROLE */}
						<Typography
							variant="h5"
							className={classes.itemHeading}
						>
							code editor
						</Typography>
						{/* COMPANY NAME */}
						<Typography variant="body1" className={classes.title}>
							beauxnarrow.co.uk
						</Typography>
						{/* JOB DESCRIPTION */}
						<Typography
							variant="subtitle1"
							className={classes.body}
						>
							<span className={classes.subtitle}>
								<strong>Description: </strong>
							</span>
							Edited Shopify webpages using HTML, modified Shopify
							templates and plugins using CSS
							<br />
							<span className={classes.subtitle}></span>
							<span className={classes.subtitle}>
								<strong>Core technologies: </strong>
							</span>
							HTML5, CSS3
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Experience;