import { createStore as reduxCreateStore } from "redux"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    console.log('createState:[state.count]:', state.count)
    return Object.assign({}, state, {
      count: !state.count,
    })
  }
  return state
}

//sprawdza wartość w przeglądarce
const isBrowser = () => typeof window !== "undefined"

const prefersDarkMode = isBrowser() && window.matchMedia('(prefers-color-scheme: dark)')
console.log('createState:[prefersDarkMode.matches]: ', prefersDarkMode.matches);
const initialState = { count: prefersDarkMode.matches}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore