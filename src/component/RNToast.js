import React, {Component} from "react-native";
import Toast from "react-native-root-toast";

export default class RNToast extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 10); // show toast after 0.01s

        setTimeout(() => this.setState({
            visible: false
        }), 1000); // hide toast after 1s
    };

    render() {
        return <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >This is a message</Toast>;
    }
}