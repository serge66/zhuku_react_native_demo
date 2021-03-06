"use strict";

import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground
} from "react-native";
import {NavigationActions} from "react-navigation";
import Constants from "../utils/Constants";
import Utils from '../utils/Utils';

const backAction = NavigationActions.back({key: 'Splash'});
export default class SelectEntryView extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    _paramsToLastPage() {
        const {navigate, goBack, state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        state
            .params
            .callback('从selectEntty界面回传的数据');
        goBack(null);
    }

    _loginClick() {

        this
            .props
            .navigation
            .navigate('Login', {
                // 跳转的时候携带一个参数去下个页面
                callback: (data) => {
                    console.log('SelectEntryView callback: ' + data); // 打印值为：'回调参数'
                    this._paramsToLastPage();
                }
            });
        // this.props.navigation.dispatch(backAction);
    }

    render() {
        // const url = require('../assets/img/bg.jpg');
        return (
            <View style={[styles.flex]}>
                <ImageBackground
                    style={[styles.flex, styles.top]}
                    source={require('../assets/img/login/Home_PageView_Bg.png')}>
                    <TouchableOpacity
                        activeOpacity={Constants.ActiveOpacityNum}
                        style={[styles.contentLayout]}
                        onPress={() => this._loginClick()}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View>
                                        <Image
                                            style={styles.leftImage}
                                            source={require('../assets/img/login/Home_Login.png')}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.titleText}>立即登录</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.ContentText}>已有帐号，可立即登录使用</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={styles.arrowImage}
                                    source={require('../assets/img/login/Home_Arrow.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={Constants.ActiveOpacityNum}
                        style={[styles.contentLayout]}
                        onPress={() => this._loginClick()}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    < View >
                                        <Image
                                            style={styles.leftImage}
                                            source={require('../assets/img/login/Home_Join.png')}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.titleText}>加入企业</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.ContentText}>已收到企业代码？请加入已有企业</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={styles.arrowImage}
                                    source={require('../assets/img/login/Home_Arrow.png')}/>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={Constants.ActiveOpacityNum}
                        style={[styles.contentLayout]}
                        onPress={() => this._loginClick()}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View>
                                        <Image
                                            style={styles.leftImage}
                                            source={require('../assets/img/login/Home_Create.png')}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.titleText}>创建企业</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.ContentText}>免费创建新企业或新的团队</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={styles.arrowImage}
                                    source={require('../assets/img/login/Home_Arrow.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={Constants.ActiveOpacityNum}
                        style={[styles.contentLayout]}
                        onPress={() => this._loginClick()}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View >
                                        <Image
                                            style={styles.leftImage}
                                            source={require('../assets/img/login/Home_Supervise.png')}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.titleText}>业主监督</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.ContentText}>监管施工方？请进入业主监督</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    style={styles.arrowImage}
                                    source={require('../assets/img/login/Home_Arrow.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    };
}
// const imgUrl = require('../assets/img/bg.png ');
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: Utils.size.width,
        height: Utils.size.height,
        // backgroundImage: `url(${imgUrl})`, backgroundColor:'#aaaaaa',
    },
    titleText: {
        fontSize: Utils.getWidth(15),
        color: '#000000',
        textAlign: 'center',
        marginLeft: Utils.getWidth(10)
    },
    ContentText: {
        fontSize: Utils.getWidth(12),
        color: '#aaaaaa',
        textAlign: 'center',
        marginTop: Utils.getHeight(5)
    },
    titleLayout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    leftImage: {
        width: Utils.getWidth(20),
        height: Utils.getHeight(20)
    },
    arrowImage: {
        width: Utils.getWidth(10),
        height: Utils.getHeight(10)
    },
    contentLeftLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1
    },
    contentLayout: {
        marginLeft: Utils.getWidth(15),
        marginRight: Utils.getWidth(15), //TODO 值和marginLeft应一样
        paddingLeft: Utils.getWidth(15),
        paddingRight: Utils.getWidth(15),
        paddingTop: Utils.getHeight(10),
        paddingBottom: Utils.getHeight(10),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    contentLayoutView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
});
