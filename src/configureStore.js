import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers';

export default const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
