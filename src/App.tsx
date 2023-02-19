import './App.scss'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

const App = () => {

  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App;
