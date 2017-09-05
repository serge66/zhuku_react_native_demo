import React, {Component} from "react";
import {AppRegistry, View} from "react-native";
// import stack from './src/views/SplashView.js';
import "./src/utils/Storage";
import "./src/utils/Constants";
import "./src/utils/GlobalVariable";
import Stack from "./src/navigation/Index";
import {Provider} from 'react-redux';
import configureStore from './src/store/Index';

const store = configureStore();

class AppRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                <Stack/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('zhuku02', () => AppRoot);
