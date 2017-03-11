/**
 * Created by Jason on 16/8/5.
 */

import React , { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
import { NativeModules } from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
import { NativeAppEventEmitter } from 'react-native';
var subscription;

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notice:'',
        };
      }

    componentDidMount() {
        console.log('开始订阅通知...');
        subscription = NativeAppEventEmitter.addListener(
            'EventReminder',
            (reminder) => console.log('通知信息:'+reminder.name)
        );
    }

    componentWillUnmount(){
        subscription.remove();
    }
    render (){
        return(
            <View style={styles.container}>
                {/*<Text style={styles.welcome}>
                    封装iOS原生模块实例
                </Text>
                <CustomButton text="点击调用原生模块addEvent方法"
                              onPress={()=>CalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
                />
                <CustomButton text="点击调用原生模块addEventMoreDate方法"
                              onPress={()=>CalendarManager.addEventMoreDate('生日聚会', '江苏南通 中天路',1463987752)}
                />
                <CustomButton text="调用原生模块addEventMoreDetails方法-传入字段格式"
                              onPress={()=>CalendarManager.addEventMoreDetails('生日聚会', {
                                  location:'江苏 南通市 中天路',
                                  time:1463987752,
                                  description:'请一定准时来哦~'
                              })}
                />
                <Text style={{marginLeft:5}}>
                    '发送通知信息:'+{this.state.notice}
                </Text>*/}
                <CustomButton text="点击调用原生模块sendNotification方法"
                              onPress={()=>CalendarManager.sendNotification('准备发送通知...')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'red',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    button:{
        margin:5,
        backgroundColor:'white',
        padding:10,
        borderWidth:1,
        borderColor:'#cdcdcd',
    },
    buttonText:{
        textAlign:'center',
    },
});

AppRegistry.registerComponent('Helloworld',()=> Helloworld);



