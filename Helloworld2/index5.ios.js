/**
 * Created by Jason on 16/7/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    RefreshControl,
    TextInput,
    Image,

} from 'react-native';
var Platform = require('react-native').Platform;
var ImagePickerManager = require('react-native-image-picker');
var options = {
    title: 'Select Avatar', // 选择器的标题，可以设置为空来不显示标题
    // takePhotoButtonTitle: 'Take Photo...', // 调取摄像头的按钮，可以设置为空使用户不可选择拍照
    // chooseFromLibraryButtonTitle:'Choose from Library...', // 调取相册的按钮，可以设置为空使用户不可选择相册照片
    customButtons: {
        'Choose Photo from Facebook': 'fb', // [按钮文字] : [当选择这个按钮时返回的字符串]
    },
    /*mediaType: ‘photo‘, // ‘photo‘ or ‘video‘
    videoQuality: ‘high‘, // ‘low‘, ‘medium‘, or ‘high‘
    durationLimit: 10, // video recording max time in seconds
    maxWidth: 100, // photos only默认为手机屏幕的宽，高与宽一样，为正方形照片
    maxHeight: 100, // photos only
    allowsEditing: false, // 当用户选择过照片之后是否允许再次编辑图片*/
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class Helloworld extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            avatarSource: null,
        };
      }
    render() {
        if (this.state.avatarSource == null){
            ImagePickerManager.showImagePicker(options, (response)  => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    // You can display the image using either data...
                    const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                    // or a reference to the platform specific asset location
                    if (Platform.OS === 'ios') {
                        const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                    } else {
                        const source = {uri: response.uri, isStatic: true};
                    }
                    if (this.state.avatarSource ==null){
                        this.setState({
                            avatarSource: source,
                        });
                    }else {

                    }

                }
            });
        }else {

        }
        return (
            <View style={styles.container}>
                <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    uploadAvatar:{
        // width:100,
        // height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },


});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
