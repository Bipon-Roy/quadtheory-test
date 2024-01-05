import "./App.css";
import useData from "./Hook/useData";

function App() {
    const { data, loading } = useData();
    console.log(data, loading);
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <>
            {data.length && (
                <div>
                    {data.map((item) => (
                        <p key={item.Id}>{item?.Name}</p>
                    ))}
                </div>
            )}
        </>
    );
}

export default App;
