import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Pisahkan ke App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);