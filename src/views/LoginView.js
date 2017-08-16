import React from "react";
import {View, Image, AppRegistry, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity} from "react-native";
import {StackNavigator} from "react-navigation";
import HomeView from "./HomeView.js";

const {height, width}=Dimensions.get('window');
class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pwd: '',
            key: 'ANDROID#12134',
        };
    }

    static navigationOptions = {
        header: null,
    };

    _getData() {
        fetch('http://gl.zhu-ku.com/zhuku/ws/system/auth/getNewVersion/1')
            .then((response) => response.json())
            .then((resopnseJson) => {
                console.log(resopnseJson);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    _postData() {
        fetch('http://api.test.zhu-ku.com/zhuku/ws/system/auth/access', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'multipart/form-data',
                // 'Content-Type': 'application/json',
            },
            mode: 'cors',
            credentials: 'include',
            // body: this.formData,
            body: JSON.stringify({
                'userAccount': this.state.account,
                'userPassword': this.state.pwd,
                'appKey': this.state.key,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                // alert(responseJson);
                this.props.navigation.navigate('Home');
                return responseJson.statusDesc;
            })
            .catch((error) => {
                console.error(error);
                // alert(error);
            });
    }

    login_click() {
        //可以用 const reindexToken = await AsyncStorage.getItem('REINDEX_TOKEN');存取

        console.log('ssssss' + this.state.pwd);
        console.log('ssssss' + this.state.account);
        console.log('ssssss' + this.state.key);

        // this._postData();
        // this._getData();
        this.props.navigation.navigate('Home');
        // this.props.navigation.goBack('SelectEntry');
    }

    forgot_click() {
        // alert("忘记密码")

    }

    render() {
        return (
            <View style={[styles.flex, styles.top]}>
                <View style={styles.homePage}>
                    <Text style={styles.homePageText}>首页</Text>
                </View>
                <View>
                    <Image style={{width: 80, height: 100}}
                           resizeMode={'center'}
                           source={require('../assets/img/logo_alone.png')}/>
                </View>
                <View style={styles.content}>{/*中间的两个输入模块*/}
                    <View style={styles.account_pwd_line}>
                        <View style={styles.account_pwd}>
                            <Text style={styles.leftText}>帐号</Text>
                            {/*<Text style={styles.rightText}>请输入手机号</Text>*/}
                            <TextInput
                                placeholder={'请输入手机号'}
                                multiline={false}
                                autoFocus={true}
                                style={styles.rightText}
                                blurOnSubmit={true}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    this.setState({
                                        account: text,
                                    });
                                }}
                            />
                        </View>
                        <View style={styles.line}>{/*一条线*/}
                        </View>
                    </View>
                    <View style={styles.account_pwd_line}>
                        <View style={styles.account_pwd}>
                            <Text style={styles.leftText}>密码</Text>
                            {/* <Text style={styles.rightText}>请输入登录密码</Text>*/}
                            <TextInput
                                placeholder={'请输入登录密码'}
                                multiline={false}
                                autoFocus={false}
                                style={styles.rightText}
                                blurOnSubmit={true}
                                secureTextEntry={true}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'ascii-capable'}
                                onChangeText={(text) => {
                                    this.setState({
                                        pwd: text,
                                    });
                                }}
                            />
                        </View>
                        <View style={styles.line}>{/*一条线*/}
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => this.login_click()}>
                    <View style={styles.loginLayout}>
                        <Text style={styles.loginText}>登录</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => this.forgot_click()}>
                    <View>
                        <Text style={styles.forgotText}>忘记密码?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    ;
}
;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    top: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    homePage: {
        // flex: 1,
        height: 80,
        width: width,
        marginTop: 20,
        // alignSelf: 'flex-end',
    },
    homePageText: {
        alignSelf: 'flex-end',
        marginRight: 20,
        color: '#10b2ff',
        fontSize: 15,
    },
    content: {
        width: width,
        height: height / 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    account_pwd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    account_pwd_line: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    leftText: {
        fontSize: 15,
        color: '#000000',
        // width:'60%',
    },
    rightText: {
        fontSize: 13,
        color: '#aaaaaa',
        flex: 1,
        marginLeft: 10,
    },
    line: {
        height: 1,
        width: 300,
        backgroundColor: '#e5e5e5'
    },
    loginLayout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10b2ff',
        height: 40,
        width: 300,
        marginTop: 20,

    },
    loginText: {
        color: '#ffffff',
        fontSize: 15,
        alignSelf: 'center',
    },
    forgotText: {
        fontSize: 12,
        color: '#aaaaaa',
        marginTop: 20,
    },
});

const loginStack = StackNavigator({
    Login: {screen: LoginView},
    Home: {screen: HomeView},
});

module.exports = loginStack;