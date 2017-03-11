/**
 * Created by Jason on 16/8/3.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
}from 'react-native';


export default class  secondPage extends Component{
    render(){
        return(
            <View style={styles.flex}></View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
        backgroundColor:'red',
    },
})