import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ErrorBoundry } from "./error-boundry.jsx";
import { Provider } from "react-redux";
import  store  from "../src/store/store.js";


import './index.css'

createRoot(document.getElementById('root')).render(
  <ErrorBoundry fallback={<h1>There was an error. Please try again later.</h1>}>
    <Provider store={store}>
    <App />
    </Provider>
    </ErrorBoundry>
)



     
