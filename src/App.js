import logo from "./logo.svg";
import "./App.css";
import { DotaCard } from "./components/dota-card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProPlayerPage from "./pages/pro-player";
import DotaHeroPage from "./pages/dota-hero";
import { Button } from "antd";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>

        <Switch>
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
