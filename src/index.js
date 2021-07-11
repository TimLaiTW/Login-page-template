import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import LoginPage from "./LoginPage";

ReactDOM.render(
    <BrowserRouter>
        <LoginPage />
    </BrowserRouter>,
    document.getElementById("root")
);
