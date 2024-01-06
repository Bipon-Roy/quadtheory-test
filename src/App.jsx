import "./App.css";
import Banner from "./Pages/Banner/Banner";
import PopularMenu from "./Pages/PopularMenu/PopularMenu";
import Navbar from "./Pages/Navbar/Navbar";
import Recommended from "./Pages/RecommendedMenu/Recommended";
import Footer from "./Pages/Footer/Footer";

function App() {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Banner />
                <PopularMenu />
                <Recommended />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default App;
