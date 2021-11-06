import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {ProfileReducer} from "./ProfileReducer";
import {LoginReducer} from "./LoginReducer";
import {SuperComponentsReducer} from "./SuperComponentsReducer";
import {RegistReducer} from "./RegistReducer";
import {PasswordRecoveryReducer} from "./PasswordRecoveryReducer";
import {PasswordNewReducer} from "./PasswordNewReducer";

const rootReducer = combineReducers({
    profile: ProfileReducer,
    login: LoginReducer,
    components: SuperComponentsReducer,
    registry: RegistReducer,
    passRecovery: PasswordRecoveryReducer,
    passNew: PasswordNewReducer,
})

// const store: Store<AppRootStoreType> = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStoreType = ReturnType<typeof rootReducer>

export default store;
//@ts-ignore
window.store = store