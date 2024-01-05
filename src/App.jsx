import "./App.css";
import Banner from "./Pages/Banner/Banner";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
    // const { data, loading } = useData();

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center">
    //             <span className="loading loading-bars loading-lg"></span>
    //         </div>
    //     );
    // }
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <Navbar />
            <Banner />
        </div>
    );
}

export default App;
