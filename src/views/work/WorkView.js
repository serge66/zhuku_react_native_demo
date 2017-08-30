"use strict";
import React from "react";
import {View, Image, AppRegistry, StyleSheet, Text} from "react-native";

export default class WorkView extends React.Component {
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
            }}> 工作台</Text>,
        headerStyle: {
            backgroundColor: "white"
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        headerLeft:null,
    };

    render() {
        return (
            <View style={[styles.flex, styles.top]}>
                <Image style={styles.bottom} source={require('../../assets/img/login/splash_logo.png')}></Image>
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


