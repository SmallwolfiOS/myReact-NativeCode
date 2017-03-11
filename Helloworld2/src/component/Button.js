/**
 * mahp 2016-7-6
 */

import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export  default class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            disabled: false,
        };
    }
    enable = () => {
        this.setState({
            disabled: false,
            
        });
    }
    disable = () =>{
        this.setState({
            disabled:true,
        });
    }
    customPressHandle = () => {
        //自定义的方法大家请使用属性来定义
        // alert('你按下了按钮,当前状态是 ' + this.state.status);
        console.log(1);
        const {onPress} = this.props;
        this.disable();
        onPress(this.enable);//异步执行
        //this.enable();
    };


    render() {
        const {text, beijingyanse} = this.props;
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    disabled = {this.state.disabled}
                    style = {[styles.button,this.state.disabled && styles.disabled]}
                    onPress = {this.customPressHandle}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>

    </View>
    );
    }
}


const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 150,
        backgroundColor: 'green',
        borderRadius: 20,
        borderColor: 'red',
        justifyContent: 'center',
        overflow: 'hidden',

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    disabled: {
        backgroundColor: 'gray',
        borderWidth:3,

    },
});

