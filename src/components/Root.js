import { Provider } from "react-redux";
import App from "../App";
import * as React from "react";

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;