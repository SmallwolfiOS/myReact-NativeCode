/**
 * Created by Jason on 16/7/28.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
}from 'react-native';
class Helloworld extends Component{
    render(){
        return(
            <View style={styles.flex}>
                <TextField  name= '123'/>
            </View>
        );
    }
}
class TextField extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            <TextInput placeholder={this.props.name} style={styles.TF}></TextInput>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
        backgroundColor:'yellow',
    },
    TF:{
        height:50,
        marginLeft:30,
        marginRight:30,
        marginTop:100,
        borderWidth:0.5,
        borderColor:'red',

    },

});
AppRegistry.registerComponent('Helloworld', ()=> Helloworld);