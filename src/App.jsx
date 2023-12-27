import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <div className="flex md:h-screen flex-col">
            <Navbar />
            <Body/>
            <Footer />
        </div>
    );
}

export default App;
