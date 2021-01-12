import { combineReducers, createStore } from "redux";
import AddEditReducer from "./reducers/AddEdit-reducer";
import announcementReducer from "./reducers/announcement-reducer";

let reducers = combineReducers({
    announcement:announcementReducer,
    addEditPage:AddEditReducer,
    
});
let store = createStore(reducers);

export default store;