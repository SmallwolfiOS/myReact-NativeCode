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
  View
} from 'react-native';

class FlexDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>0</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>a</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>2</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>3</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>4</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>5</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>6</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>7</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>8</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>9</Text></View>
        <View style={styles.subViewStyle}><Text style={styles.numberStyle}>10</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  X轴
    justifyContent: 'center',
    justifyContent: 'flex-start',
    justifyContent: 'flex-end',
    justifyContent: 'space-between',//均分
    justifyContent: 'space-around',//等分


    //  Y轴
    alignItems: 'center',
    alignItems: 'flex-start',
    alignItems: 'flex-end',
    // alignItems: 'stretch',


    backgroundColor: '#F5FCFF',

    flexDirection:'column',//竖着
    flexDirection:'column-reverse',//竖着
    flexDirection:'row',//横着
    flexDirection:'row-reverse',//反向
    // alignSelf:'auto',

    flexWrap:'wrap',//换行使用
    // flexWrap:'nowrap',


  },
  subViewStyle:{
    // flex:1,//设置此选项,宽高基本上偶一个没有用
    backgroundColor:'blue',
    borderWidth:2,
    borderColor:'red',
    // width:60,
    height:60,
    justifyContent:'center',
    //  marginRight:100,
      // marginTop:20,

  },
  numberStyle:{
    textAlign:'center',
    color:'yellow',
  },

});

AppRegistry.registerComponent('FlexDemo', () => FlexDemo);
