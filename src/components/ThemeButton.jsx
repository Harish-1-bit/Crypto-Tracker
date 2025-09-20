import React, { useContext } from 'react'
import { FaPalette } from 'react-icons/fa'
import ThemeContext from '../context/ThemeContext'

const ThemeButton = () => {

    const { theme, themes, dispatch } = useContext(ThemeContext)

    const switchTheme = () => {
        dispatch({
            type: "SWITCH_THEME"
        })

        localStorage.setItem('theme_value', JSON.stringify(theme > 2 ? 0 : theme + 1))

    }


    return (
        <button onClick={switchTheme} className={`fixed bottom-10 left-5 h-12 w-12 rounded-full flex items-center justify-center ${themes[theme]} border border-white border-4 text-white text-2xl cursor-pointer hover:scale-125 duration-300`}>
            <FaPalette />
        </button>
    )
}

export default ThemeButton
