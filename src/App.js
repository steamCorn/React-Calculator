import Calculator from '../src/components/Calculator';
import React, { createContext, useState } from 'react';

// export const ThemeContext = React.createContext();

function App() {
    // const [theme, setTheme] = useState("light");

    // const toggelTheme = () => {
    //     setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
    // }

    // return (
    //     <ThemeContext value={{ theme, toggelTheme}}>
    //         <div className="wrapper-calculator" id={theme}>
    //             <Calculator />
    //         </div>
    //     </ThemeContext> 
        
    // );

    return (
        <div className="wrapper-calculator">
            <Calculator />
        </div>
    );
}

export default App;
