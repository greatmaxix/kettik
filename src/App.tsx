import './App.css';
import ContactUs from './components/index/ContactUs';
import IntroIndex from './components/index/Intro';
import WhoAreWe from './components/index/WhoAreWe';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IntroIndex/>
      <WhoAreWe/>
      <ContactUs/>
    </div>
  );
}

export default App;
