import reducers from '../reducers';

import {createStore,applyMiddleware} from 'redux';

 const store = createStore(reducers,applyMiddleware());

 export default store;
