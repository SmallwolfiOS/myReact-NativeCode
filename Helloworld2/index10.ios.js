/**
 * Created by Jason on 16/8/2.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
var DismissKeyboard = require('dismissKeyboard');
class Helloworld extends Component{
    render() {
        return(
            <View style={styles.flex}>
                <TextInput style={styles.textInputStyle} placeholder={'测试'} ref="textInput">

                </TextInput>
                <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => { DismissKeyboard() }}>
                    <Text>确 定</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const  styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    textInputStyle:{
        borderColor:'red',
        borderWidth:1,
        marginTop:60,
        marginLeft:40,
        marginRight:40,
        height:40,
    },
    touchableOpacityStyle:{
        borderColor:'red',
        borderWidth:1,
        marginTop:60,
        marginLeft:40,
        marginRight:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
})

AppRegistry.registerComponent('Helloworld', ()=> Helloworld);