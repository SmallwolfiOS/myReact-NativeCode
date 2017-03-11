/**
 * Created by Jason on 16/8/3.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform,
    ListView,
}from 'react-native';

import ImagePickerManager from 'react-native-image-picker';
var options = {
    title: 'Select Avatar', // 选择器的标题，可以设置为空来不显示标题
    // takePhotoButtonTitle: 'Take Photo...', // 调取摄像头的按钮，可以设置为空使用户不可选择拍照
    // chooseFromLibraryButtonTitle:'Choose from Library...', // 调取相册的按钮，可以设置为空使用户不可选择相册照片
    // customButtons: {
    //     'Choose Photo from Facebook': 'fb', // [按钮文字] : [当选择这个按钮时返回的字符串]
    // },
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
var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class firstPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始
        this.state = {
            avatarSource: null,
            imageArray:[],
        };
    }

    buttonAction = ()=>{
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            cancelButtonTitle:'取消',
            takePhotoButtonTitle:'相机',
            chooseFromLibraryButtonTitle:'相册',
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePickerManager.showImagePicker(options, (response) => {
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
                this.state.imageArray.push(source);
                console.log(this.state.imageArray.length + 'ewqeqwewq');
                dataSource = dataSource.cloneWithRows(this.state.imageArray)
                this.setState({
                    avatarSource: source,
                });

            }
        });
    }

    render(){

        // this.state.imageArray.push(this.state.avatarSource);

        return(
            <View style={styles.flex}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonAction}>
                        <Text>上传证据</Text>
                    </TouchableOpacity>

                </View>
                <ListView
                    contentContainerStyle={styles.row}
                    dataSource={dataSource}

                    renderRow={(rowData) => <View style={styles.cellContainer}>
                        <Image source={rowData} style={{height:100, width:100}}></Image>
                    </View>}/>
                {/*<Image source={this.state.avatarSource} style={styles.uploadAvatar} />*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        marginTop:20,
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:60,
        backgroundColor:'yellow',
    },
    buttonStyle:{
        width:100,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    uploadAvatar:{
        flex:1,
        margin:10,
        marginTop:10
    },
    row:{
        marginTop:5,
        // justifyContent: 'space-around',
        // justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cellContainer:{
        padding:10,
        height:120,
        width:120,
        justifyContent:'center',
        alignItems:'center',
    },
});