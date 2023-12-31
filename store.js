import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
