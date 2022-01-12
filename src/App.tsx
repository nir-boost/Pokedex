import Header from './components/Header/Header';
import Home from './screens/Home/HomePage';
import Pokedex from './screens/Pokedex/Pokedex';
import {BrowserRouter as Router,useRoutes} from "react-router-dom"

const RoutesElments = () =>{

let routes =  useRoutes([
  {path: "/", element: <Home />},
  {path: "/Pokedex", element: <Pokedex />},
])

return routes
}

const App = () => {

  return (
    <div >
      <Header />
      <Router>
        <RoutesElments />
      </Router>
    </div>
  );
}

export default App;
