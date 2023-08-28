// Components
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <SocialLinks />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
