import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import LandingPage from '../Components/LandingPage.jsx';
import Home from '../Components/Home.jsx';
import FormTouristActivity from '../Components/FormTouristActivity.jsx';

function App() {
  return (
    <div className="App">
      <h1>Henry</h1>


      <Route path={"/"} exact>
        <LandingPage />
      </Route>

      <Route path={"/home"}>
        <Nav />
        <Home/>
      </Route>

      <Route path={"/createactivity"}>
        <Nav />
        <FormTouristActivity/>
      </Route>

    </div>
  );
}

export default App;
