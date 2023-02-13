import './App.scss'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
    </div>
  )
}

export default App;
