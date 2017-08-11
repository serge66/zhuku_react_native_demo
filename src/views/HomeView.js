import React from "react";
import {View, Image, AppRegistry, StyleSheet} from "react-native";
import {StackNavigator, TabNavigator} from "react-navigation";
import WorkView from "./WorkView.js";
import MyView from "./MyView.js";
import ProjectView from "./ProjectsView.js";
import ContactsView from "./ContactsView.js";
import MessagesView from "./MessagesView";

const navigator = TabNavigator({
    Message: {screen: MessagesView},
    Work: {screen: WorkView},
    Project: {screen: ProjectView},
    Contact: {screen: ContactsView},
    My: {screen: MyView},
},{
    tabBarPosition:'bottom',
    animationEnabled:true,
    lazy:false,
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    cardStack:{
        gesturesEnabled:true,
    },
    tabBarOptions:{
        // activeTintColor: '#ff8500', // 文字和图片选中颜色
        // inactiveTintColor: '#999', // 文字和图片未选中颜色
        // showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示

    },
    indicatorStyle: {
        height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {
        backgroundColor: '#fff', // TabBar 背景色
        // height: 44
    },
    labelStyle: {
        fontSize: 10, // 文字大小
    },
});

const homeStack = StackNavigator({
    Home: {screen: navigator},
});

module.exports = homeStack;
