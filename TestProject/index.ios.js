/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component ,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NativeModules,
} from 'react-native';

var BGNativeModuleExample = NativeModules.BGNativeModuleExample;

import ZKShareBt from "./ZKShareButton"


class TestProject extends Component {

    componentDidMount() {
        // BGNativeModuleExample.testPrint("Jack", {
        //     height: '1.78m',
        //     weight: '7kg'
        // });
        // BGNativeModuleExample.getNativeClass(name => {
        //     console.log("nativeClass: ", name);
        // });

        // BGNativeModuleExample.testRespondMethod("dealloc")
        // .then(result => {
        //     console.log("result is ", result);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        // console.log("BGModuleName value is ", BGNativeModuleExample.BGModuleName);
        
    }
  render() {
    return (
      <View style={styles.container}>
      <ZKShareBt style={styles.map}
            appKey={'57355f3e67e58ed0a50030a1'}
            shareText={'分享内容'}
            imageName={'logo'}
            //myTitle = {this.state.btText}//设置分享按钮标题
            //color={this.state.color}//设置分享按钮标题字体颜色
            btImageName = {'share_icon'} //设置分享按钮图片
   />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  map:{
    height:70,
    width:80,
    backgroundColor:'red',
  }
});

AppRegistry.registerComponent('TestProject', () => TestProject);
