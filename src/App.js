import Calculator from '../src/components/Calculator';
import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            <div className="wrapper-calculator" id={theme}>
                <Calculator />
            </div>
        </ThemeContext.Provider>

    );
}

export default App;
