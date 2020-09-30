import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const InputField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#00d8ff",
		},
		"& label": {
			color: "#ccc",
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "#ccc",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#ccc",
			},
		},
	},
})(TextField);

const useStyles = makeStyles({
	mainContainer: {
		background: "#000",
		height: "90.8vh",
	},
	pageHeading: {
		color: "#fff",
		fontSize: "2rem",
		textAlign: "center",
		textTransform: "uppercase",
		padding: "1rem 0 3rem 0",
	},
	form: {
		padding: "2rem 2rem 3rem 2rem",
		borderRadius: "0 1rem 0 1rem",
		background: "#fff",
		position: "absolute",
		top: "55%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	input: {
		background: "#fff",
		border: "none"
	},
	button: {
		marginTop: "1rem",
		color: "#00d8ff",
		borderColor: "#ccc",
		background: "#222",
	},
});

const Contact = () => {

	const classes = useStyles()
	
    return (
		<>
			<Navbar />
			<Box component="header" className={classes.mainContainer}>
				<Grid container justify="center">
					<Typography variant="h5" className={classes.pageHeading}>
						contact
					</Typography>
					<Box component="form" className={classes.form}>
						<InputField
							className={classes.input}
							fullWidth={true}
							label="Name"
							variant="outlined"
							margin="dense"
							size="medium"
						/>
						<br />
						<InputField
							className={classes.input}
							fullWidth={true}
							label="Email"
							variant="outlined"
							margin="dense"
							size="medium"
						/>
						<br />
						<InputField
							className={classes.input}
							fullWidth={true}
							label="Inquiry"
							variant="outlined"
							margin="dense"
							size="medium"
						/>
						<br />
						<InputField
							className={classes.input}
							fullWidth={true}
							multiline={true}
							rows="6"
							label="Message"
							variant="outlined"
							margin="dense"
							size="medium"
						/>
						<Button
							variant="outlined"
							fullWidth={true}
							endIcon={<SendIcon />}
							className={classes.button}
						>
							Send
						</Button>
					</Box>
				</Grid>
			</Box>
		</>
	);
}

export default Contact
