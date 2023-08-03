//import Logo from "./components/Logo/Logo";
import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Card
        src="https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
        title="Scornful Size"
        follows={6470}
      />
    </div>
  );
}

export default App;
