"use strict";

import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {NavigationActions} from "react-navigation";
import {doLogin} from '../actions/Login';
import {doIndex} from "../actions/IndexAllAction";

import {connect} from 'react-redux';

let thiz;
let curToken;

class SplashView extends React.Component {
    constructor(props) {
        super(props);
        thiz = this;
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

    componentWillMount() {

    }

    componentDidMount() {
        curToken = global.gv.getAccessToken(this.props.dispatch);
        console.log('splashView token:' + curToken)
        if (curToken !== '') {
            console.log('componentDidMount  token:' + curToken)
            thiz
                .props
                .dispatch(doIndex(curToken));
        }

        // this.timer = setTimeout(
        //     () => {
        //         let navigateAction = NavigationActions.reset({
        //             index: 0,
        //             actions: [
        //                 NavigationActions.navigate({routeName: 'SelectEntry'}), //or routeName:'Main'
        //             ]
        //         });
        //         this
        //             .props
        //             .navigation
        //             .dispatch(navigateAction);
        //
        //         // this.props.navigation.navigate('SelectEntry', {
        //         //     callback: (data) => {
        //         //         console.log('splashView callback: ' + data);
        //         //         this._paramsToLastPage();
        //
        //         //     }
        //         // });
        //     },
        //     1000
        // );
    };

    componentWillUnmount() {
        // this.timer && clearTimeout(this.timer);
    };

    _gotoHome() {
        let navigateAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'}), //or routeName:'Main'
            ]
        });
        thiz
            .props
            .navigation
            .dispatch(navigateAction);
        console.log('2222');
    }

    _gotoLogin() {
        console.log('4444');
        let navigateAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'}), //or routeName:'Main'
            ]
        });
        thiz
            .props
            .navigation
            .dispatch(navigateAction);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.indexStatus + "--" + nextState + '--this.props.status:' + this.props.indexStatus);
        console.log(nextProps.userTokenStatus + "--" + nextState + '--this.props.status:' + this.props.userTokenStatus);

        if (nextProps.userTokenStatus == 'done'
            && nextProps.token != '') {
            console.log('nextProps.token1:' + nextProps.token)
            this
                .props
                .dispatch(doIndex(nextProps.token));
            return false;
        }
        if (nextProps.userTokenStatus == 'error') {
            console.log('nextProps.token4:' + nextProps.token)
            this._gotoLogin();
            return false;
        }

        // if (this.props.status != nextProps.status && nextProps.status == 'doing' && !nextProps.isSuccess) {
        //     console.log('11111111');
        //     // this.setState({isShowProgress: true});
        //     return true;
        // }
        if (this.props.indexStatus != nextProps.indexStatus
            && nextProps.indexStatus == 'done') {
            // this.setState({isShowProgress: false});
            console.log('nextProps.indexStatus == \'done\'')
            this._gotoHome();
            return false;
        }
        if (this.props.indexStatus != nextProps.indexStatus
            && nextProps.indexStatus == 'error') {
            // this.setState({isShowProgress: false});
            console.log('nextProps.indexStatus == \'error\'')
            this._gotoLogin();
            return false;
        }

        return true;
    }


    render() {
        const {status} = this.props
        console.log("render-========" + status)
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


function select(store) {
    return {
        indexData: store.indexAll.indexData,
        indexStatus: store.indexAll.indexStatus,
        // isShowProgress: store.loginIn.isShowProgress,
        token: store.userToken.token,
        userTokenStatus: store.userToken.userTokenStatus,
    }
}

export default connect(select)(SplashView);