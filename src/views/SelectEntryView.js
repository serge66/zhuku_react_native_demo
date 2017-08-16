import React from "react";
import {View, Image, AppRegistry, StyleSheet, Text, TouchableOpacity} from "react-native";
import loginStack from "./LoginView.js";
import {StackNavigator, NavigationActions} from "react-navigation";

const backAction = NavigationActions.back({
    key: 'splash'
});

class SelectEntryView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    _loginClick() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('Login', {
            // 跳转的时候携带一个参数去下个页面
            callback: (data) => {
                console.log(data); // 打印值为：'回调参数'
            }
        });
        // this.props.navigation.dispatch(backAction);
    }

    render() {
        // const url = require('../assets/img/bg.jpg');
        return (
            <View style={[styles.flex]}>
                < Image style={[styles.flex, styles.top]}
                        source={require('../assets/img/bg.jpg')}>
                    <TouchableOpacity activeOpacity={1}
                                      style={[styles.contentLayout]}
                                      onPress={() => this._loginClick()}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View>
                                        < Image style={styles.leftImage}
                                                source={require('../assets/img/sign_in.png')}></Image>
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
                                <Image style={styles.arrowImage} source={require('../assets/img/get_into.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1}
                                      style={[styles.contentLayout]}
                                      onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    < View >
                                        < Image style={styles.leftImage}
                                                source={require('../assets/img/join_enterprise.png')}></Image>
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
                                <Image style={styles.arrowImage} source={require('../assets/img/get_into.png')}/>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1}
                                      style={[styles.contentLayout]}
                                      onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View>
                                        <Image style={styles.leftImage}
                                               source={require('../assets/img/create_enterprise.png')}></Image>
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
                                <Image style={styles.arrowImage} source={require('../assets/img/get_into.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1}
                                      style={[styles.contentLayout]}
                                      onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={[styles.contentLayoutView]}>
                            <View style={styles.contentLeftLayout}>
                                <View style={styles.titleLayout}>
                                    <View >
                                        <Image style={styles.leftImage}
                                               source={require('../assets/img/supervise.png')}></Image>
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
                                <Image style={styles.arrowImage} source={require('../assets/img/get_into.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Image>
            </View>
        );
    };
}
// const imgUrl = require('../assets/img/bg.png ');
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundImage: `url(${imgUrl})`,
        // backgroundColor:'#aaaaaa',
    },
    titleText: {
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        marginLeft: 10,
    },
    ContentText: {
        fontSize: 12,
        color: '#aaaaaa',
        textAlign: 'center',
        marginTop: 5,
    },
    titleLayout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    leftImage: {
        width: 20,
        height: 20,
    },
    arrowImage: {
        width: 10,
        height: 10,

    },
    contentLeftLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },
    contentLayout: {
        marginLeft: 15,
        marginRight: 30,//TODO 值和marginLeft应一样
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    contentLayoutView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

const selectEntryStack = StackNavigator({
    SelectEntry: {screen: SelectEntryView},
    Login: {screen: loginStack},
});

module.exports = selectEntryStack;
