import { createStore as reduxCreateStore } from "redux"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: !state.count,
    })
  }
  return state
}

//sprawdza wartość w przeglądarce
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

const initialState = { count: prefersDarkMode.matches}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore