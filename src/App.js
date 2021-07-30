
import React from 'react';
import "./resources/style.css";
import Header from "./Components/Header_Footer/Header";
import Slider from "./Components/Slider/Slider";
import Info from "./Components/Info/index";
import Hightlights from "./Components/Hightlights/index";
import Pricing from "./Components/Pricing/index";
import Location from "./Components/Location/index";
import Footer from "./Components/Header_Footer/Footer";


function App() {
  return (
    <div className="App" style={{ height: "2000px", background: "#FFDEAD" ,  margin: 0  ,
	}}>
		<Header />
		<Slider />
		<Info />
        <Hightlights />
        <Pricing />
        <Location />
        <Footer />
    </div>
  );
}

export default App;
