import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import Devtools from '../DevTools';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
    reducers,
        Devtools.instrument()
    );

store.dispatch(getCountries());
export default store;
