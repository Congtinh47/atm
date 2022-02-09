import { applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root.reducer";
import { createStore } from "redux";
import rootSaga from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
// store.dispatch(actions.apiGetAllOrders());
// store.dispatch(actions.apiGetAllProducts());
export default store;
