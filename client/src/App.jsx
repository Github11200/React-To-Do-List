import React, { useState } from "react";
import "./App.css";
import { TodoWrapper } from "./Components/TodoWrapper";

export const themeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState("retro");

    return (
        <themeContext.Provider value={[theme, setTheme]}>
            <div data-theme={theme} className="prose">
                <TodoWrapper />
            </div>
        </themeContext.Provider>
    );
}

export default App;
