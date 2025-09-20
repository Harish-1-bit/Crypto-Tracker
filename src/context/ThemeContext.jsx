import { createContext, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {




    const initialState = {
        themes: ['bg-gradient-to-r from-purple-500 to-purple-900', 'bg-gradient-to-r from-slate-500 to-slate-900', 'bg-gradient-to-r from-green-300 to-green-900', 'bg-gradient-to-b from-rose-900 to-rose-400'],
        theme: parseInt(localStorage.getItem('theme_value')) || 1

    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState)



    return (
        <ThemeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext