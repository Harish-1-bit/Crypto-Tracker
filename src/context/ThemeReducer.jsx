export const ThemeReducer = (state, action) => {
    switch (action.type) {

        case "SWITCH_THEME":
            return {
                ...state,
                theme: state.theme > 2 ? 0 : state.theme + 1
            }


        default:
            return state
    }
}