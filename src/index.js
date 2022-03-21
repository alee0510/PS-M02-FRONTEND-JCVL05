import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

// import main app
import Main from './main'

// render main component
ReactDOM.render(
    <ChakraProvider>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </ChakraProvider>
    ,document.getElementById("root")
)