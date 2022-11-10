import React from "react";

 export const ColorModeContext = React.createContext({
     mode: "dark",
     setMode: () => {
        alert("voce precisa me configurar")
     },
     toggleMode: () => {
        alert("voce precisa me configurar")
     }
 });

 export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

     return (
         <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode}}>
             {props.children}
         </ColorModeContext.Provider>
     );
 } 