import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Facebook from '@material-ui/icons/Facebook'

const useStyles = makeStyles({
	root: {
		"& .MuiBottomNavigationAction-root": {
			minWidth: 0,
			maxWidth: "250px",
		},
		"& .MuiSvgIcon-root": {
			fill: "#fff",
			"&:hover": {
				fill: "#00d8ff",
				fontSize: "1.5rem",
			},
		},
	},
});

const Footer = () => {

    const classes = useStyles()
    return (
		<BottomNavigation
			width="auto"
			style={{ background: "rgb(0,0,0,0.95)" }}
		>
			<BottomNavigationAction
				className={classes.root}
				icon={<GitHub />}
				href="https://github.com/GmanMcman"
				target="_blank"
			/>
			<BottomNavigationAction
				className={classes.root}
				icon={<LinkedIn />}
				href="https://www.linkedin.com/in/graciousadowei/"
				target="_blank"
			/>
			<BottomNavigationAction
				className={classes.root}
				icon={<Facebook />}
				href="https://www.facebook.com/gracious.adowei"
				target="_blank"
			/>
		</BottomNavigation>
	);
}

export default Footer
