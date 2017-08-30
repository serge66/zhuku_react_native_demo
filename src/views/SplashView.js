"use strict";

import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {NavigationActions} from "react-navigation";

export default class SplashView extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
    };
    _paramsToLastPage() {
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        // state.params.callback('从SplashView界面回传的数据');
        goBack(null);
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                let navigateAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'SelectEntry'}), //or routeName:'Main'
                    ]
                });
                this
                    .props
                    .navigation
                    .dispatch(navigateAction);

                // this.props.navigation.navigate('SelectEntry', {
                //     callback: (data) => {
                //         console.log('splashView callback: ' + data);
                //         this._paramsToLastPage();

                //     }
                // });
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
                       source={require('../assets/img/login/splash_logo.png')}></Image>
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

