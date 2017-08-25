import {Platform, NativeModules} from 'react-native';

// 下一句中的CallPhoneModule即对应上文 public String getName()中返回的字符串 android

var module = null;
console.log('js 开始调用 原生');
if (Platform.OS == 'ios') {
    console.log('js 调用 ios');
    module = NativeModules.CallPhoneModuleIos;
} else if (Platform.OS == 'android') {
    console.log('js 调用 android');    
    module = NativeModules.CallPhoneModule;
} else if (Platform.OS == 'web') {
    //暂未实现web功能
    console.log('js 调用 web');    
}
export default module;