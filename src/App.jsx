import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="flex md:h-screen flex-col pb-4">
            <Navbar />
            <Body/>
            <Footer />
        </div>
    );
}

export default App;
