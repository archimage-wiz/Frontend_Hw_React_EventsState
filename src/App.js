import "./App.css";
import { Portfolio } from "./components/portfolio/portfolio.jsx";
import { Store } from "./components/store/store.jsx";
import { useState, useEffect } from "react";

function App() {
    const [ stylePath, setStylePath ] = useState("https://fonts.googleapis.com/icon?family=Material+Icons");

    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = stylePath;
        head.appendChild(link);
        return () => {
            head.removeChild(link);
        };
    }, [stylePath]);

    return (
        <>
            <Store />
            <Portfolio />
        </>
    );
}

export default App;
