import {AppRegistry} from "react-native";
// import stack from './src/views/SplashView.js';
import "./src/utils/Storage";
import "./src/utils/Constants";
import "./src/utils/GlobalVariable";
import stack from "./src/utils/Router.js";

AppRegistry.registerComponent('zhuku02', () => stack);
