// import Slider from "./Slider";
import { Helmet } from "react-helmet-async";
import Estate from "./Estate";
import Self from "./Self";
import ImageSlider from "./SlideChack";
import Sliders from "./Sliders";
import Leaflet from "../Unity/Leaflet";
import { useContext } from "react";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Crestview | home</title>
            </Helmet>
            {/* <Sliders></Sliders> */}
            <ImageSlider></ImageSlider>
            <Estate></Estate>
            <Self></Self>
            <Leaflet></Leaflet>
        </div>
    );
};

export default Home;