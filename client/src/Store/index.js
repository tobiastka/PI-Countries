import { applyMiddleware, createStore } from "redux";
import reducer  from "../Reducer/index.js";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export let store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

