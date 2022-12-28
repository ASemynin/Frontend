import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Managers from "./components/managers/Managers";
import Targets from "./components/targets/Targets";
import target_data from "./media/targets-data/targets.json"

function App() {
  return (
    <div className="App">
        <Header/>
        <Landing/>
        <Managers/>
        <Targets target_data={target_data}/>
        <Footer/>
    </div>
  );
}

export default App;
