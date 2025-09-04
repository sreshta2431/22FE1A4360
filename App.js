import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UrlShortener from "./pages/UrlShortener";
import Statistics from "./pages/Statistics";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Shortener</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </div>
  );
}