import React from "react";
import SplashView from "../views/SplashView";
import SelectEntryView from "../views/SelectEntryView";
import LoginView from "../views/LoginView";
import WorkView from "../views/work/WorkView.js";
import MyView from "../views/my/MyView.js";
import ProjectView from "../views/project/ProjectsView.js";
import ContactsView from "../views/contact/ContactsView.js";
import MessagesView from "../views/message/MessagesView";
import MyCompany from "../views/my/MyCompany";
import HelpView from "../views/my/HelpView";
import SettingsView from "../views/my/SettingsView";
import FeedBackView from "../views/my/FeedBackView";
import ServiceView from "../views/my/ServiceView";
import NewFunctionView from "../views/my/NewFunctionView";
import PeopleCenterView from "../views/my/PeopleCenterView";
import {Image} from "react-native";
import {StackNavigator, TabNavigator} from "react-navigation";
import CardStackStyleInterpolator from "react-navigation/src/views/CardStackStyleInterpolator";

const resizeMode = 'center';//resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')

const homeTabNavigator = TabNavigator({
    Message: {
        screen: MessagesView,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../assets/img/iocn_xiaoxi_light.png')
                        : require('../assets/img/icon_xiaoxi.png')}
                    resizeMode={resizeMode}/>
            ),
        },
    },
    Work: {
        screen: WorkView,
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../assets/img/icon_banggong_light.png')
                        : require('../assets/img/icon_banggong.png')}
                    resizeMode={resizeMode}/>
            ),
        },
    },
    Project: {
        screen: ProjectView,
        navigationOptions: {
            tabBarLabel: '项目',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../assets/img/icon_tab_yingyong_light.png')
                        : require('../assets/img/icon_tab_yingyong.png')}
                    resizeMode={resizeMode}/>
            ),
        },
    },
    Contact: {
        screen: ContactsView,
        navigationOptions: {
            tabBarLabel: '联系人',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../assets/img/icon_contacts_line_light.png')
                        : require('../assets/img/icon_contacts_line.png')}
                    resizeMode={resizeMode}/>
            ),
        },
    },
    My: {
        screen: MyView,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../assets/img/icon_wode_light.png')
                        : require('../assets/img/icon_wode.png')}
                    resizeMode={resizeMode}/>
            ),
        },
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: false,
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    cardStack: {
        gesturesEnabled: true,
    },
    tabBarOptions: {
        activeTintColor: '#34b0ff', // 文字和图片选中颜色
        inactiveTintColor: '#000', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        showLabel: true,
        pressColor: '#6c6dff',
        pressOpcity: '0.5',
        // iconStyle: {//设置后图片显示不完整
        //     width: 20,
        //     height: 25,
        //     // margin:2,
        // },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 60
        },
        indicatorStyle: {
            height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        labelStyle: {
            fontSize: 12, // 文字大小
            // color: '#000',如果指出设置颜色，会覆盖activeTintColor、inactiveTintColor设置
        },
    },
});


const Stack = StackNavigator({
    Splash: {screen: SplashView},
    SelectEntry: {screen: SelectEntryView},
    Login: {screen: LoginView},
    Home: {screen: homeTabNavigator},
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