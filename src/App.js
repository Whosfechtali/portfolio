import './App.css';
import Header from './Components/Header/Header.js';
import Body from './Components/Body/About/Body.js';
import Contact from './Components/Body/ContactForm/Contact.js';
import Work from './Components/Body/work/Work.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Work />
      <Contact />
      </div>
  );
}

export default App;
