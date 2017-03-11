/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} from 'react-native';
var { NativeModules } = require('react-native');
var RNBridgeModule=NativeModules.RNBridgeModule;
import { NativeAppEventEmitter } from 'react-native';
var subscription;


class hunheDemo extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        events:'',
        msg:'',
      };
    }
  //获取Promise对象处理
  async _updateEvents(){
    try{
      var events=await RNBridgeModule.RNInvokeOCPromise({'name':'jiangqqlmj'});
      this.setState({events});
    }catch(e){
      this.setState({events:e.message});
    }
  }
  componentDidMount(){
    subscription = NativeAppEventEmitter.addListener(
        'EventReminder',
        (reminder) => {
          let errorCode=reminder.errorCode;
          if(errorCode===0){
            this.setState({msg:reminder.name});
          }else{
            this.setState({msg:reminder.msg});
          }

        }
    );
  }
  componentWillUnmount(){
    subscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
          {/* <Text style={styles.welcome}>
           混合与RN,iOS通信实例讲解
           </Text>
           <Text style={{margin:20}}>
           来自:江清清的技术专栏(http://www.lcode.org)
           </Text>
           <Text style={{margin:5}}>'返回数据为:'+{this.state.events}</Text>
           <CustomButton text='RN调用iOS原生方法_CallBack回调'
           onPress={()=>{RNBridgeModule.RNInvokeOCCallBack(
           {'name':'jiangqq','description':'http://www.lcode.org'},
           (error,events)=>{
           if(error){
           console.error(error);
           }else{
           this.setState({events:events});
           }
           })}}
           />
           <CustomButton text='RN调用iOS原生方法_Promise回调'
           onPress={()=>this._updateEvents()}
           />
           <Text style={{margin:20}}>
           '返回数据为:'+{this.state.msg}
           </Text>
           <CustomButton text='iOS调用访问React Native'
           onPress={()=>RNBridgeModule.VCOpenRN({'name':'jiangqqlmj'})}
           />*/}
          <CustomButton text='RN 跳转原生'
                        onPress={()=>RNBridgeModule.RNOpenVC({'name':'jiangqqlmj'})}
          />
      </View>
    );
  }
}



class CustomButton extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:120,
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#facece',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('hunheDemo', () => hunheDemo);
