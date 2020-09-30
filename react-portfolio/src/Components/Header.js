import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Typed from 'react-typed'
import avatar from "../images/react-icon.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15),
        height: theme.spacing(15),   
	},
	subtitle: {
		color: "#fff",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
		width: "100%",
		textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar src={avatar} alt="react-icon" className={classes.avatar} />
            </Grid>
			<br />
			<Typography variant="h6" className={classes.subtitle}>
				<Typed
					strings={["Hi, my name is Gracious Adowei", "I'm a frontend developer in Hampshire, UK", "I built this site with React and Material UI", "Take a look around!"]}
					typeSpeed={30}
					backSpeed={20}
					loop
				/>
			</Typography>
		</Box>
	);
}

export default Header
