import { Provider } from "react-redux";
import App from "../App";
import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/:filter?' component={App}/>
            </div>
        </BrowserRouter>
    </Provider>
);

export default Root;