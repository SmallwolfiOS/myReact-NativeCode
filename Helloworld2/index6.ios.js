/**
 * Created by Jason on 16/7/27.
 */
import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';

class Helloworld extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            num:0,
        };
        this.timer = setInterval(() =>{
            this.setState({
                num:(this.state.num + 1),
            });
        },1000);
      }

    render() {

        return (
            <View style={styles.container}>
                <View style={{flex:1, width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{flex:1, width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{flex:1, width: 50, height: 50, backgroundColor: 'steelblue'}} />
                <Text> {this.state.num}</Text>
                <TouchableOpacity style={{backgroundColor:'yellow',width:80, height:40,}}
                                  onPress={()=>{ this.timer && clearInterval(this.timer);
                                    this.setState({
                                        num:0,
                                    });
                                  }}
                ></TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        // height:300,
        backgroundColor:'red',
    },
});

AppRegistry.registerComponent('Helloworld' ,() => Helloworld);