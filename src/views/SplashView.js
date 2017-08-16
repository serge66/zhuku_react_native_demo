import React from "react";
import {Image, StyleSheet, View} from "react-native";

export default class SplashView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.props.navigation.navigate('SelectEntry', {
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

