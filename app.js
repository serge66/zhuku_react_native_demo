import React, {Component} from "react";
import {AppRegistry, View} from "react-native";
// import stack from './src/views/SplashView.js';
import "./src/utils/Storage";
import "./src/utils/Constants";
import "./src/utils/GlobalVariable";
import Stack from "./src/navigation/Index";

class AppRoot extends Component {
    render() {
        return (<Stack/>)
    }
}

AppRegistry.registerComponent('zhuku02', () => AppRoot);
