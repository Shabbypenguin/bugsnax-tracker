    import { combineReducers } from 'redux';


    import snaxReducer from './reducer.js';


    const rootReducer = combineReducers({

        snaxreducer: snaxReducer,

    });

    export default rootReducer;