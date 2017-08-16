import React from "react";
import {View, Image, AppRegistry, StyleSheet, BackHandler} from "react-native";
import ToastUtils from "../utils/ToastUtils.js";

let lastBackPressed = 0;

export default class MessagesView extends React.Component {
    static navigationOptions = {
        title: '消息',
        header: null,
    };

   /* componentWillMount() {
        console.log('消息界面挂载');
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    componentUnWillMount() {
        console.log('消息界面卸载');

        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    _onBackAndroid = () => {
        let now = new Date().getTime();
        if (now - lastBackPressed < 2500) {
            return false;
        }
        lastBackPressed = now;
        // ToastUtils.show('再点一次退出应用');
        return true;
    }*/

    render() {

        return (
            <View style={[styles.flex, styles.top]}>
                <Image style={styles.bottom}
                       source={require('../assets/img/splash_logo.png')}></Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    bottom: {
        width: 300,
        height: 80,
        marginBottom: 40,
    },
});
