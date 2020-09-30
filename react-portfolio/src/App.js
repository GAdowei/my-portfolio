import React from "react";
import "./App.css";
import {Route} from "react-router-dom"
import Home from "./Components/index";
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<>
			<CssBaseline />
			<Route exact path="/" component={Home} />
			<Route path="/experience" component={Experience} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</>
	);
}

export default App;
