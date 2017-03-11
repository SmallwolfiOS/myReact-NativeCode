/**
 * Created by Jason on 2017/3/6.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import Camera from 'react-native-camera';
import { takeSnapshot } from "react-native-view-shot";
const catsSource = {
    uri: "https://i.imgur.com/5EOyTDQ.jpg",
};
class Helloworld3 extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            imageSource:require('./xuah.png'),
            previewSource: catsSource,
            error: null,
            res: null,
            value: {
                format: "png",
                quality: 0.9,
                result: "file",
            },
        };
      }
    render() {
        return (
            <View style={styles.container}
                  ref = 'image'>
                {this.showImage()}

            </View>
        );
    }
    showImage=()=>{
        setTimeout(
            () => {
                // this.viewShot()
            },
            1500
        );
          return(
              <View style={{marginLeft:100,marginTop:100,}}>
                    <Image
                     source={this.state.imageSource}
                     style={styles.ImageStyle}
                           ></Image>
                     <TouchableOpacity style={styles.buttonStyle}
                                       onPress={()=>this.viewShot()}>
                         <Text>截图</Text>
                     </TouchableOpacity>
              </View>
          );
    }
    viewShot=()=>{
       alert('xxxxx');
            takeSnapshot(this.refs.image, this.state.vaxslue)
                .then(res =>
                    this.state.imageSource !== "file"
                        ? res
                        : new Promise((success, failure) =>
                            // just a test to ensure res can be used in Image.getSize
                            Image.getSize(
                                res,
                                (width, height) => (console.log(res,width,height), success(res)),
                                failure)))
                .then(res => this.setState({
                    error: null,
                    res,
                    imageSource: { uri:
                        this.state.value.result === "base64"
                            ? "data:image/"+this.state.value.format+";base64,"+res
                            : res }
                }))
                .catch(error => (console.warn(error), this.setState({ error, res: null, previewSource: null })));
    }

    showCamera=()=>{
        return(
            <Camera
                ref={(cam) => {
                         this.camera = cam;
                    }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </Camera>
        );
    }
    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'yellow',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    ImageStyle:{
        height:100,
        width:100,
        // backgroundColor:'yellow',
        padding:30,
    },
    buttonStyle:{
        height:30,width:80,
        backgroundColor:'blue',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:100,
    },
});


AppRegistry.registerComponent('Helloworld3', () => Helloworld3);
