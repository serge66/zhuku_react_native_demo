import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

/**
 * Created by lishengjiework@126.com on 2017/8/22.
 */
export default class FeedBackView extends Component {
    static navigationOptions = {
        headerTitle: <Text
            style={{
                fontSize: 16,
                textAlignVertical: 'center',
                color: '#000',
            }}
            onPress={() => {
                alert('点击了title')
            }}> 意见反馈</Text>,
        headerStyle: {
            backgroundColor: "white"
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
    };

    render() {
        return (
            <View style={styles.flex}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
});