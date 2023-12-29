import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="flex flex-col pb-4 md:h-screen">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
