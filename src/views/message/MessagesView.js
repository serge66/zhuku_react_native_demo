import React from "react";
import {View, Image, AppRegistry, StyleSheet, BackHandler,Text} from "react-native";
let lastBackPressed = 0;

export default class MessagesView extends React.Component {
    static navigationOptions = {
        headerTitle: <Text
            style={{
                fontSize:16,
                alignSelf: 'center',
                textAlignVertical: 'center',
                color:'#000',
            }}
            onPress={() => {
                alert('点击了title')
            }}> 消息</Text>,
        headerStyle: {
            backgroundColor: "white"
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft:null,
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
                       source={require('../../assets/img/login/splash_logo.png')}></Image>
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
