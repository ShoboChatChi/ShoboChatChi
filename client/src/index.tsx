
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core"

import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from "./store";
import { theme } from "./style";

export const store = configureStore();

ReactDOM.render(
    (<Provider store={ store }>
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>),
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
