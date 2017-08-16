import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {StackNavigator} from "react-navigation";
import SelectEntryView from "./SelectEntryView.js";

class SplashView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.props.navigation.navigate('selectEntry', {
                    callback: (data) => {
                        console.log('splashView callback: ' + data)
                        this.props.navigation.goBack();
                    }
                });
            },
            1000
        );
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    };

    render() {
        return (
            <View style={[styles.flex, styles.top]}>
                <Image style={styles.bottom}
                       source={require('../assets/img/splash_logo.png')}></Image>
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

const splashStack = StackNavigator({
    splash: {screen: SplashView},
    selectEntry: {screen: SelectEntryView},
});

module.exports = splashStack;
