import React from "react";
import Navbar from "./Navbar";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../images/pokemon_logo.jpg";
import project2 from "../images/facebook-logo.png";
import project3 from "../images/pinterest-logo-white.png";

const useStyles = makeStyles({
	mainContainer: {
		background: "#000",
		height: "100%",
	},
	pageHeading: {
		color: "#fff",
		fontSize: "2rem",
		textAlign: "center",
		textTransform: "uppercase",
		padding: "1rem 0 0 0",
	},
	cardContainer: {
		maxWidth: 345,
		margin: "5rem auto",
	},
	button: {
		background: "#555",
		color: "#00d8ff",
	},
});

const Portfolio = () => {
    const classes = useStyles()
	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Typography variant="h6" className={classes.pageHeading}>
				projects
			</Typography>
			<Grid container justify="center" alignItems="center" style={{marginTop: "-3rem"}}>
				{/* Project 1 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="pokedex-app"
								height="140"
								image={project1}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Pokedex Gallery App
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									<strong>Description:</strong> This frontend
									application fetches and displays Pokemon-API
									resources in a user-friendly interface.
									<br />
									<br />
									<strong>Technologies:</strong> Javascript,
									CSS and HTML
									<br />
									<br />
									<strong>Mobile-responsive:</strong> NO
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://github.com/GmanMcman/pokedex"
									target="_blank"
								>
									Source Code
								</Button>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://gman-pokedex-app.netlify.app"
									target="_blank"
								>
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
				{/* Project 2 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="facebook-desktop-clone"
								height="140"
								image={project2}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Facebook Desktop Clone
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									<strong>Description:</strong> This project
									renders a clone of Facebook desktop site's
									login page. Original can be seen at
									https://facebook.com (OLD SITE)
									<br />
									<br />
									<strong>Technologies:</strong> CSS and HTML
									<br />
									<br />
									<strong>Mobile-responsive:</strong> NO
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://github.com/GmanMcman/fb-clone"
									target="_blank"
								>
									Source Code
								</Button>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://fb-desktop-login-page-clone.netlify.app"
									target="_blank"
								>
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
				{/* Project 3 */}
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="pinterest-desktop-clone"
								height="140"
								image={project3}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Pinterest Desktop Clone
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									<strong>Description:</strong> This project
									renders a clone of Pinterest desktop site's
									login page. Original can be seen at
									https://pinterest.com
									<br />
									<br />
									<strong>Technologies:</strong> CSS and HTML
									<br />
									<br />
									<strong>Mobile-responsive:</strong> NO
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://github.com/GmanMcman/pinterest-clone"
									target="_blank"
								>
									Source Code
								</Button>
								<Button
									className={classes.button}
									size="small"
									color="primary"
									href="https://pinterest-login-page-clone.netlify.app"
									target="_blank"
								>
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Portfolio;
