import "./App.css";
import Banner from "./Pages/Banner/Banner";
import PopularMenu from "./Pages/Menu/PopularMenu";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <Navbar />
            <Banner />
            <PopularMenu />
        </div>
    );
}

export default App;
