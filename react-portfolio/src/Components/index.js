import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'
import {Typography} from '@material-ui/core'

const useStyles = makeStyles({
	pageHeading: {
		color: "#fff",
		background: "#000",
		fontSize: "2rem",
		textAlign: "center",
		textTransform: "uppercase",
		padding: "1rem 0 3rem 0",
	},
	particlesCanva: {
		position: "absolute",
		background: "#000",
		opacity: 0.5,
		height: "75.5vh !important",
	},
});

const Home = () => {

    const classes = useStyles()

    return (
		<>
			<Navbar />
			<Typography variant="h5" className={classes.pageHeading}>
				portfolio
			</Typography>
			<Header />
			<Particles
				canvasClassName={classes.particlesCanva}
				params={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: "circle",
							stroke: {
								width: 1,
								color: "#00d8ff",
							},
						},
						size: {
							value: 4,
							random: true,
							anim: {
								enable: true,
								speed: 10,
								size_min: 0.1,
								sync: true,
							},
						},
						opacity: {
							value: 1,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: true,
							},
						},
					},
				}}
			/>
		</>
	);
}

export default Home
