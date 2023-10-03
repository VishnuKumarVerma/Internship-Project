import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import ShowMore from "./Components/ShowMore";
import "./styles.css";

export default function App() {
  const fontSTyle = {
    fontFamily: "'Poppins', sans-serif"
  }
  return (
    <div className="bg-[#d7e6f6] w-[90%] p-2 mx-auto" style={fontSTyle}>
      <Header />
      <Navigation />
      <Cards />
      <ShowMore />
    </div>
  );
}
