/**
 * Created by Jason on 2017/2/23.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Dimensions,
    PixelRatio,
} from 'react-native';
var ImagePicker = require('react-native-image-picker');
import ImageResizer from 'react-native-image-resizer';
var {height, width} = Dimensions.get('window');
class Helloworld3 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            newperson:'http://service.image.myqcloud.com/face/newperson',//2.1 个体创建
            delperson:'http://service.image.myqcloud.com/face/delperson',//2.2 删除个体
            addface:'http://service.image.myqcloud.com/face/addface',//2.3 增加人脸
            delface:'http://service.image.myqcloud.com/face/delface',//2.4 删除人脸
            setinfo:'http://service.image.myqcloud.com/face/setinfo',//2.5 设置信息
            getinfo:'http://service.image.myqcloud.com/face/getinfo',//2.6 获取信息
            getgroupids:'http://service.image.myqcloud.com/face/getgroupids',//2.7 获取组列表
            getpersonids:'http://service.image.myqcloud.com/face/getpersonids',//2.8 获取人列表
            getfaceids:'http://service.image.myqcloud.com/face/getfaceids',//2.9 获取人脸列表
            getfaceinfo:'http://service.image.myqcloud.com/face/getfaceinfo',//2.10 获取人脸信息
            verify:'http://service.image.myqcloud.com/face/verify',//2.11 人脸验证
            identify:'http://service.image.myqcloud.com/face/identify',//2.12 人脸检索
            compare:'http://service.image.myqcloud.com/face/compare',//2.13 人脸比对

            ////////
            faceid:'xxx',
            imageSource:'xx',
        };
    }
    openCamera=(url)=>{//打开相机
        var options = {
            // title: '选择图片',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = {uri: response.uri};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                // if (Platform.OS === 'ios') {
                //     source.uri = response.uri.replace('file://', '');
                // } else {
                //     source.uri = response.uri
                // }
                // alert('图片'+ response.uri);
                ImageResizer.createResizedImage(source.uri, width * PixelRatio.get(), height * PixelRatio.get(), 'JPEG', 20).then((resizedImageUri) => {
                    // resizeImageUri is the URI of the new image that can now be displayed, uploaded...

                    console.log( '压缩成功: ' + resizedImageUri);
                    this.setState({
                        imageSource:resizedImageUri,
                    })

                    this.buttonClick(url)
                }).catch((err) => {
                    // Oops, something went wrong. Check that the filename is correct and
                    // inspect err to get more details.
                });

            }
        });
    }
    takeCameraOrNot= (url)=>{
        if (url == this.state.newperson){
            this.openCamera(url);
        }else if(url == this.state.delperson){
            this.buttonClick(url)
        }else if(url == this.state.addface){
            this.openCamera(url);
        }else  if(url == this.state.delface){
            this.buttonClick(url)
        }else if(url == this.state.getfaceids){
            this.buttonClick(url)
        }else if(url == this.state.verify){
            this.openCamera(url);
        }
    }


    buttonClick = (url)=>{
        if (url == this.state.newperson){
            this.uploadImageData(url)
        }else if(url == this.state.delperson){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",
            }
            this.uploadUrl(bodyDict,url)
        }else if(url == this.state.addface){
            this.uploadImageData(url)
        }else  if(url == this.state.delface){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",
                "face_ids":[this.state.faceid],
            }
            console.log('bodydict'+JSON.stringify(bodyDict))
            this.uploadUrl(bodyDict,url)
        }else if(url == this.state.getfaceids){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",
            }
            this.uploadUrl(bodyDict,url)
        }else if(url == this.state.verify){
            this.uploadImageData(url)
        }
    }
    uploadUrl=(bodyDict,url)=>{
        var length =   JSON.stringify(bodyDict).length
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'vyvHQY1ppbgnCknBasaM5EiXqZdhPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmZT0xNDg4NjIxMjQzJnQ9MTQ4ODUyMTI0NCZyPTI3NDEzNDgzMTgmdT0wJmY9',
                'Host': 'service.image.myqcloud.com',
                'Content-Length': length,
            },
            body: JSON.stringify(bodyDict)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(url + '-------resault------- ' + JSON.stringify(responseJson));
                // alert('resault' + JSON.stringify(responseJson));
                var dict = responseJson.data
                if(url == this.state.delperson){
                    if (dict.deleted = 1){
                        alert('删除人员成功')
                    }else {
                        alert('删除人员失败')
                    }
                }
            })
            .catch((error) => {
                console.log('error' + error);
            })
    }
    uploadImageData=(url)=>{
        let formData = new FormData();
        let file = {uri:this.state.imageSource, type:'multipart/form-data',  name:"imagesss", filename:"test.jpg"};
        formData.append('appid','1251414411');
        formData.append("bucket","ocr");
        if (url == this.state.newperson){
            formData.append('group_ids[0]','tencent')
            formData.append('person_id','person0')
            formData.append('image',file);
        }else  if(url == this.state.addface){
            formData.append('person_id','person0')
            formData.append('images[0]',file);
        }else if(url == this.state.verify){
            formData.append('person_id','person0')
            formData.append('image',file);
        }




        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': 'vyvHQY1ppbgnCknBasaM5EiXqZdhPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmZT0xNDg4NjIxMjQzJnQ9MTQ4ODUyMTI0NCZyPTI3NDEzNDgzMTgmdT0wJmY9',
                'Host': 'service.image.myqcloud.com',
                'Content-Length': formData.length,
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(url + '-------resault------- ' + JSON.stringify(responseJson));
                // alert('resault' + JSON.stringify(responseJson));
                var dict = responseJson.data
                if (url == this.state.addface){
                    this.setState({
                        faceid:dict.face_ids[0],
                    });
                    alert('添加人脸成功')
                    console.log('====='+ this.state.faceid);
                }else if(url == this.state.verify){
                    if (dict.confidence > 60){
                        alert('相似度很高，认证成功')
                    }else {
                        alert('相似度很低，认证失败')
                    }
                }else if(url == this.state.newperson){
                    if (dict.suc_face = 1){
                        alert('添加人员成功')
                    }else {
                        alert('添加人员失败')
                    }
                }else if(url == this.state.delface){
                    if (dict.deleted = 1){
                        alert('删除人脸成功')
                    }else {
                        alert('删除人脸失败')
                    }
                }
            })
            .catch((error) => {
                // console.log('error' + error);
                alert('error' + error);
            })

    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.newperson)}}>
                    <Text style={styles.textStyle}>添加人员</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.delperson)}}>
                    <Text style={styles.textStyle}>删除人员</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.addface)}}>
                    <Text style={styles.textStyle}>添加人脸</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.delface)}}>
                    <Text style={styles.textStyle}>删除人脸</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.setinfo)}}>*/}
                    {/*<Text style={styles.textStyle}>5setinfo</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.getinfo)}}>*/}
                    {/*<Text style={styles.textStyle}>6getinfo</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.getgroupids)}}>*/}
                    {/*<Text style={styles.textStyle}>7getgroupids</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.getpersonids)}}>*/}
                    {/*<Text style={styles.textStyle}>8getpersonids</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.getfaceids)}}>*/}
                    {/*<Text style={styles.textStyle}>9getfaceids</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.getfaceinfo)}}>*/}
                    {/*<Text style={styles.textStyle}>10getfaceinfo</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.verify)}}>
                    <Text style={styles.textStyle}>人脸识别</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
    },
    buttonStyle:{
        height:30,
        width:100,
        marginTop:15,
        marginLeft:150,
        backgroundColor:'blue',
        justifyContent:'center',
        flexDirection:'row',
    },
    textStyle:{
        color:'white',
        alignItems:'center',
        marginTop:8,
    },
});

AppRegistry.registerComponent('Helloworld3', () => Helloworld3);



{/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.identify)}}>*/}
    {/*<Text style={styles.textStyle}>12identify</Text>*/}
{/*</TouchableOpacity>*/}
{/*<TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.takeCameraOrNot(this.state.compare)}}>*/}
{/*<Text style={styles.textStyle}>13compare</Text>*/}
{/*</TouchableOpacity>*/}