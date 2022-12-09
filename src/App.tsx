import "./App.scss";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Services from "./Components/Services/Services";

function App() {
	return (
		<div className="app">
			<Header />
			<Main />
			<AboutUs />
			<Services />
		</div>
	);
}

export default App;
