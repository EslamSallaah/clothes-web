import { createStore } from "redux";
import rootReducer from './action/reducer/inndex';



const store = createStore(rootReducer);




export default store;