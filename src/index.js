	import React from "react";
	import { render } from "react-dom";
	import Emoji from './components/emoji'

	import data from "./data/profile.json";

	const styles = {
	  fontFamily: "sans-serif",
	  textAlign: "center"
	};

	const App = () => (
	  <div style={styles}>
		<Emoji data={data} />
	  </div>
	);

	render(<App />, document.getElementById("root"));
