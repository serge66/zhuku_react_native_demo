import SplashView from "../views/SplashView";
import SelectEntryView from "../views/SelectEntryView";
import LoginView from "../views/LoginView";
import MyCompany from "../views/my/MyCompany";
import HelpView from "../views/my/HelpView";
import SettingsView from "../views/my/SettingsView";
import FeedBackView from "../views/my/FeedBackView";
import ServiceView from "../views/my/ServiceView";
import NewFunctionView from "../views/my/NewFunctionView";
import PeopleCenterView from "../views/my/PeopleCenterView";
import {StackNavigator, TabNavigator} from "react-navigation";
// import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";
import CardStackStyleInterpolator from "react-navigation/src/views/CardStackStyleInterpolator";
import HomeTabNavigator from "../navigation/HomeTabNavigator"

const Stack = StackNavigator({
    Splash: {screen: SplashView},
    SelectEntry: {screen: SelectEntryView},
    Login: {screen: LoginView},
    Home: {screen: HomeTabNavigator},
    MyCompany: {screen: MyCompany},
    HelpView: {screen: HelpView},
    SettingsView: {screen: SettingsView},
    FeedBackView: {screen: FeedBackView},
    ServiceView: {screen: ServiceView},
    NewFunctionView: {screen: NewFunctionView},
    PeopleCenterView: {screen: PeopleCenterView},
}, {
    navigationOptions: {
        gesturesEnabled: true,
    },
    initialRouteName: 'Splash',
    // initialRouteParams:{
    //     initParams:this.props.navigation,
    // },
    /*
     headerMode - 页面跳转时，头部的动画模式
     float - 渐变，类似iOS的原生效果
     screen - 标题与屏幕一起淡入淡出
     none - 没有动画
     * */
    headerMode: 'screen',
    mode: 'card',
    transitionConfig: () => ({
        // 修改页面的跳转动画,只要修改最后的forVertical就可以实现不同的动画了。
        /*
         * 1、从右向左：  forHorizontal；
         2、从下向上：  forVertical；
         3、安卓那种的从下向上： forFadeFromBottomAndroid；
         4、无动画：  forInitial。
         * */
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),

});


export default Stack;
// export default homeTabNavigator;