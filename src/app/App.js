import "../styles/App.css";
import { Header } from "../components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DotaHeroPage from "../pages/dota-hero";
import HomePage from "../pages/homepage";
import ProPlayerPage from "../pages/pro-player";
import CrudPage from "../pages/crudpage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/crud">
            <CrudPage />
          </Route>
          <Route path="/dota-hero">
            <DotaHeroPage />
          </Route>
          <Route path="/pro-player">
            <ProPlayerPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
