import {createStore} from "redux"
import { nameReducer } from './reducer'

export const store = createStore(nameReducer)