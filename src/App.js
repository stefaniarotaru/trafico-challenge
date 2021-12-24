import './App.css';
import aos from 'aos'
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetStartedPage from './pages/GetStartedPage';
import MainPage from './pages/MainPage';

function App() {
  aos.init();

  return (
    <div>

      <Router>
        <Route exact path="/"><MainPage/></Route>
        <Route path='/getstarted'><GetStartedPage/></Route>
      </Router>

    </div>
  );
}

export default App;
