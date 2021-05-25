import Today from "./components/Today";
import Week from "./components/Week";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen h-full font-rale font-medium xl:grid xl:grid-cols-3 xl:grid-rows-layout">
      <Today />
      <Week />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
