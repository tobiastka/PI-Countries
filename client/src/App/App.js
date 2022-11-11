import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import LandingPage from '../Components/LandingPage.jsx';
import Home from '../Components/Home.jsx';
import FormTouristActivity from '../Components/FormTouristActivity.jsx';
import CountryDetail from '../Components/CountryDetail.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path={"/"} exact>
        <LandingPage />
      </Route>

      <Route path={"/home"} exact>  
        <Home/>
      </Route>

      <Route path={"/createactivity"}>
      
        <FormTouristActivity/>
      </Route>

      <Route path={"/home/:idCountry"}>
        <CountryDetail/>
      </Route>

    </div>
  );
}

export default App;
