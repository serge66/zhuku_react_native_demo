import React from "react";
import {Image, StyleSheet} from "react-native";
import {StackNavigator, TabNavigator} from "react-navigation";
import WorkView from "./WorkView.js";
import MyView from "./MyView.js";
import ProjectView from "./ProjectsView.js";
import ContactsView from "./ContactsView.js";
import MessagesView from "./MessagesView";
// import RNToast from "../test/ToastTest";

const resizeMode = 'center';//resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')

const navigator = TabNavigator({
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
            color: '#000',
        },
    },
});

const homeStack = StackNavigator({
    Home: {screen: navigator},
});

const styles = StyleSheet.create({
    tabImage: {
        width: 24,
        height: 24,
    },
});

export default homeStack;
