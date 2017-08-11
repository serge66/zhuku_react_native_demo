import React from "react";
import {View, Image, AppRegistry, StyleSheet} from "react-native";

export default class ContactsView extends React.Component {
    static navigationOptions = {
        title: '联系人',
        header: null,
    };

    render() {
        return (
            <View style={[styles.flex, styles.top]}>
                <Image style={styles.bottom} source={require('../assets/img/splash_logo.png')}></Image>
            </View>
        );
    };
}
;

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

