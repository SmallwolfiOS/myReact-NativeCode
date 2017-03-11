/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import Button from './src/component/Button'

import Icon from 'react-native-vector-icons/FontAwesome';


import Toast from 'react-native-root-toast';

let toast = Toast.show('This is a message', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});


class Helloworld extends Component {


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = { status :1,
            title:'',
        };
      }

    customHandle = (enableCallBack)=>{
        fetch('http://bbs.reactnative.cn/api/category/3')
            .then((response) => response.json())
            .then((responseText) => {
                console.log(responseText);
                this.setState({
                   title: responseText.topics[0].title,
                })
            })
            .catch((error) => {
                console.warn(error);
            });


        //禁用按钮
        this.timer = setTimeout(() => {
            Toast.show('数据有误');
           enableCallBack();

        },3000);
        // alert('正在获取数据');
        // //启用按钮
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

  render() {
    return (
      <View style={styles.container}>
          <Icon name="rocket" size={30} color="#900" />
          {/* props 属性 */}
       <Button text = "确定" beijingyanse="red" date="2016-7-6" object={{a:"b"}} />
       <Button text = "取消" beijingyanse="gray" onPress = {this.customHandle}  />
        <Text>
            { this.state.title ? this.state.title:null}

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
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
