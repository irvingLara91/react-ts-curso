
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer, {sessionAction} from "./authDuck.ts";

const rootReducer = combineReducers({
    auth:authReducer
});
export default function generateStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    sessionAction()(store.dispatch)
    return store;
}
