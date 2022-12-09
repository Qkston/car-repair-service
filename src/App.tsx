import "./App.scss";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
	return (
		<div className="app">
			<Header />
			<Main />
			<AboutUs />
		</div>
	);
}

export default App;
