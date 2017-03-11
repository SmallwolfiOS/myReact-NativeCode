/**
 * Created by Jason on 16/7/29.
 */

import React , { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
console.disableYellowBox = true;
class Helloworld extends Component{
    renderImage(imgURI) {
        return (
            <Image style={styles.ImageStyle} source={{uri: imgURI}} />
        );
    }
    render (){
        return(
            <View style={styles.container}>

                {this.props.images.map(this.renderImage)}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
    ImageStyle:{
        flex:1,
        backgroundColor:'red',
    },
});

AppRegistry.registerComponent('Helloworld',()=> Helloworld);