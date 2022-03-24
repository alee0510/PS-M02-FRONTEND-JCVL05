import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

// import main app
import Main from './main'

// configure redux
// 1. define reducer
const INITIAL_STATE = {
    users : {}
}
const Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOGIN" :
            return { users : action.payload }
        case "LOGOUT" :
            return INITIAL_STATE
        default :
            return state
    }
}

// 2. create global store
const global_store = createStore(Reducer)

// render main component
ReactDOM.render(
    <ChakraProvider>
        <BrowserRouter>
            <Provider store={global_store}>
                <Main/>
            </Provider>
        </BrowserRouter>
    </ChakraProvider>
    ,document.getElementById("root")
)