import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import ItemList from "./app/pages/item/ItemList"
import items from "./app/pages/item/Item.reducers"
import FormList from "./app/pages/item/FormList"

// Setup Redux store with Thunks
const reducers = combineReducers({ items })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <FormList />
        <ItemList />
    </Provider>
)

export default App
