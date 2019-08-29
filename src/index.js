import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

ReactDOM.render(
        <App/>,
     document.getElementById('root')
     );
=======
import "./App.css"
import App from './App';
import { Provider } from "react-redux"
import store from "@store"
import { HashRouter as Router, Route } from "react-router-dom"
ReactDOM.render(
        <Provider store={store}>
                <Router>
                        <Route path="/" component={App}  />
                </Router>
        </Provider>,
        document.getElementById('root')
);
>>>>>>> 6ccfe8679eef7087608f82c8aeb1a085629ac24a

