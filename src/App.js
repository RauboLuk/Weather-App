import Today from "./components/Today";
import Week from "./components/Week";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-rale font-medium">
      <Today />
      <Week />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
