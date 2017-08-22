import React from "react";
import {StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import GV from "../../utils/GlobalVariable";
import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";
import Constants from "../../utils/Constants";
import CallPhone from '../../native/android/CallPhone';

const {height, width} = Dimensions.get('window');
export default class MyView extends React.Component {
    static navigationOptions = {
        header: null,
    };

    _gotoMyCompany() {
        this.props.navigation.navigate('MyCompany');
    }

    _gotoHelp() {
        this.props.navigation.navigate('HelpView');
    }

    _gotoSettings() {
        this.props.navigation.navigate('SettingsView');
    }

    _gotoFeedBack() {
        this.props.navigation.navigate('FeedBackView');
    }

    _gotoService() {
        this.props.navigation.navigate('ServiceView');
    }

    _gotoNewFunction() {
        this.props.navigation.navigate('NewFunctionView');
    }

    _gotoPeopleCenter() {
        this.props.navigation.navigate('PeopleCenterView');
    }

    _gotoCallPhone() {
        CallPhone.callPhone();
    }

    render() {
        return (
            <View style={[styles.flex]}>
                <ScrollView
                    key={'scroll'}
                    horizontal={false}
                    scrollEnabled={true}>
                    <View
                        style={[styles.contentContainer, styles.flex, styles.container]}>
                        <View style={[styles.top]}>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={Constants.ActiveOpacityNum}
                                    onPress={() => this._gotoPeopleCenter()}>
                                    {/*  indicator=[null, Progress.Bar, Progress.Circle, Progress.Pie]*/}
                                    <Image
                                        key={GV.USER_PORTRAIT}
                                        source={GV.USER_PORTRAIT ?
                                            {uri: GV.USER_PORTRAIT}
                                            : require('../../assets/img/default_head.png')}
                                        indicator={Progress.Circle}
                                        style={styles.header}
                                        onLoaded={() => console.log('Image was loaded!')}
                                        onError={() => {
                                            console.log('myView图片加载出错')
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.info}>
                                <View style={styles.name_post}>
                                    <View><Text style={styles.name}>{GV.USER_NAME}</Text></View>
                                    <View><Text style={styles.post}>{GV.USER_JOB ? GV.USER_JOB : '系统管理员'}</Text></View>
                                </View>
                                <View style={styles.company_layout}>
                                    <Text style={styles.company}>{GV.COMPANYNAME}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.shadow}/>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum}
                            onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_wodeqiye.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>我的企业</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>切换加入的企业</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoHelp()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_xinshou.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>新手帮助</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoSettings()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_shezhi.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>设置</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoFeedBack()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_yijian.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>意见反馈</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}></Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoService()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_kefu.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>客服</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>24小时人工客服</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_tuijian.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>推荐筑库</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>分享给好友一起体验</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoMyCompany()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_wodeqiye.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>切换内外网</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>切换内外网</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoNewFunction()}>
                            <View style={styles.item}>
                                <View style={styles.item_top}>
                                    <View style={styles.item_left}>
                                        <View>
                                            <Image style={styles.item_icon}
                                                   source={require('../../assets/img/icon_my_wodeqiye.png')}/>
                                        </View>
                                        <View>
                                            <Text style={styles.item_title}>新功能</Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_right}>
                                        <View>
                                            <Text style={styles.item_desc}>新功能</Text>
                                        </View>
                                        <View>
                                            <Image style={styles.item_arrow}
                                                   source={require('../../assets/img/icon_right_arrow.png')}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_line}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bottom}>
                            <Text style={[styles.bottom_info]}>全国服务热线:</Text>
                            <TouchableOpacity
                                activeOpacity={Constants.ActiveOpacityNum} onPress={() => this._gotoCallPhone()}>
                                <Text style={[styles.bottom_info_num]}>400-777-3177</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height / 4,
        width: width,
    },
    header: {
        width: 80,
        height: 80,
        marginLeft: 30,
        borderRadius: 25,
    },

    contentContainer: {
        // paddingVertical: 20
    },
    info: {
        marginLeft: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    name_post: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {
        fontSize: 15,
    },
    post: {
        marginLeft: 10,
        fontSize: 12,
    },
    company_layout: {
        height: 50,
        width: 220,
        marginTop: 15,
    },
    company: {
        fontSize: 12,
    },
    shadow: {
        width: width,
        height: 10,
        backgroundColor: '#F1F1F1',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: width,
        // height: 50,
    },
    item_top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width,
        height: 45,
    },
    item_line: {
        width: width,
        height: 1,
        backgroundColor: '#aaaaaaaa',
        // marginTop: 10,
    },
    item_icon: {
        width: 15,
        height: 15,
        margin: 10,
    },
    item_arrow: {
        width: 15,
        height: 15,
        margin: 10,
    },
    item_title: {
        fontSize: 15,
    },
    item_desc: {
        fontSize: 13,
    },
    item_left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    item_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottom: {
        width: width,
        height: 80,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_info: {
        fontSize: 13,
        alignSelf: 'center',
    },
    bottom_info_num: {
        fontSize: 13,
        alignSelf: 'center',
        color: '#2298ED'
    },
});

