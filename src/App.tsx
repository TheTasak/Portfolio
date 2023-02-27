import './App.scss'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
