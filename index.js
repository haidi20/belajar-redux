const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

//action scope
const BUY_CAKE = 'BUY_CAKE';
const buyCake = () => {
    return{
        type: BUY_CAKE,
        info: "first redux action"
    }
}
const BUY_ICECREAM = 'BUY_ICECREAM';
const buyIceCream = () => {
    return{
        type: BUY_ICECREAM, 
    }
}

//end action scope

// reducer scope 
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        default:
            return state;

    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducers, applyMiddleware(logger));

console.log('initial state = ', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();