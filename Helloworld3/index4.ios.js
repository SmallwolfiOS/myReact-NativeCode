// /**
//  * Created by Jason on 2017/2/23.
//  */
// import React, {Component} from 'react';
//
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Platform,
// } from 'react-native';
// var ImagePicker = require('react-native-image-picker');
// class Helloworld3 extends Component {
//     // 构造
//     constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {
//             avatarSource:null,
//         };
//     }
//     buttonClick = ()=>{
//         var options = {
//             title: '选择图片',
//
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images'
//             }
//         };
//         ImagePicker.showImagePicker(options, (response) => {
//             // console.log('Response = ', response);
//
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             }
//             else if (response.error) {
//                 // console.log('ImagePicker Error: ', response.error);
//             }
//             else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             }
//             else {
//                 let source = { uri: response.uri };
//
//                 // You can also display the image using data:
//                 // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
//                 // if (Platform.OS === 'ios') {
//                 //     source.uri = response.uri.replace('file://', '');
//                 // } else {
//                 //     source.uri = response.uri
//                 // }
//                 // alert('图片'+ response.uri);
//                 this.setState({
//                     avatarSource: source.uri
//                 });
//                 this.uploadImage(source.uri);
//
//             }
//         });
//     }
//
//     uploadImage=(uriL)=>{
//
//         let formData = new FormData();
//
//
//         let file = {uri:uriL, type:'multipart/form-data',  name:"image[0]", filename:"222222.jpg"};
//
//         formData.append('appid',1251414411);
//         // formData.append("bucket","ocr");
//         formData.append('bucket','ocr');
//         formData.append('card_type',0);
//         formData.append('group_ids',['tencent','qq']);
//         formData.append('person_id','person0');
//         formData.append('image[0]',file);
//         // alert('xxxxxx'+ JSON.stringify(formData));
//
//         fetch('http://service.image.myqcloud.com/face/newperson', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': 'MZ4voutyeEDsrYZj4oJoeGC8iQthPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg4MjY5MDMyJmU9MTQ4ODI3OTAzMg==',
//                 'Host': 'service.image.myqcloud.com',
//                 'Content-Length': formData.length,
//             },
//             body: formData
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 // console.log('resault' + JSON.stringify(responseJson));
//                 alert('resault' + JSON.stringify(responseJson))
//             })
//             .catch((error) => {
//                 // console.log('error' + error);
//                 alert('error' + error);
//             })
//
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonClick.bind(this)}>
//                     <Text>点击获取图片</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     buttonStyle:{
//         height:40,
//         width:80,
//         marginTop:100,
//         marginLeft:100,
//         backgroundColor:'red',
//     }
// });
//
// AppRegistry.registerComponent('Helloworld3', () => Helloworld3);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
} from 'react-native';
var ImagePicker = require('react-native-image-picker');
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

        };
    }
    buttonClick = (url)=>{
        if (url == this.state.newperson){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                'group_ids':['tencent'],
                "person_id":"person0",
                "url":"http://ocr-1251414411.costj.myqcloud.com/IMG_0080.JPG",
            }
            this.uploadUrl(bodyDict,url)
        }else if(url == this.state.delperson){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",
            }
            this.uploadUrl(bodyDict,url)
        }else if(url == this.state.addface){
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",//添加陈奕迅人脸
                "urls":["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1866086453,1200067286&fm=23&gp=0.jpg",'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=24084552,940791127&fm=11&gp=0.jpg'],
            }
            this.uploadUrl(bodyDict,url)
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
            var bodyDict = {
                "appid": '1251414411',
                "bucket": "ocr",
                "person_id":"person0",
                'url':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=410508802,2206554377&fm=11&gp=0.jpg',
            }
            this.uploadUrl(bodyDict,url)
        }
    }
    uploadUrl=(bodyDict,url)=>{
        var length =   JSON.stringify(bodyDict).length
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Kxnd4eL2ki6/raBKKo+V3431wRdhPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmZT0xNDg4MzQzMjE3JnQ9MTQ4ODMzMzIxNyZyPTkzOTA3NDg1OSZ1PTAmZj0=',
                'Host': 'service.image.myqcloud.com',
                'Content-Length': length,
            },
            body: JSON.stringify(bodyDict)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(url + '-------resault------- ' + JSON.stringify(responseJson));
                alert('resault' + JSON.stringify(responseJson));
                var dict = responseJson.data
                if (url == this.state.addface){
                    this.setState({
                        faceid:dict.face_ids[0],
                    });
                    console.log('====='+ this.state.faceid);
                }
            })
            .catch((error) => {
                console.log('error' + error);
            })
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.newperson)}}>
                    <Text>1newperson</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.delperson)}}>
                    <Text>2delperson</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.addface)}}>
                    <Text>3addface</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.delface)}}>
                    <Text>4delface</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.setinfo)}}>
                    <Text>5setinfo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.getinfo)}}>
                    <Text>6getinfo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.getgroupids)}}>
                    <Text>7getgroupids</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.getpersonids)}}>
                    <Text>8getpersonids</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.getfaceids)}}>
                    <Text>9getfaceids</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.getfaceinfo)}}>
                    <Text>10getfaceinfo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.verify)}}>
                    <Text>11verify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.identify)}}>
                    <Text>12identify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.buttonClick(this.state.compare)}}>
                    <Text>13compare</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonStyle:{
        height:40,
        width:100,
        marginTop:10,
        marginLeft:150,
        // backgroundColor:'blue',
    }
});

AppRegistry.registerComponent('Helloworld3', () => Helloworld3);






// uploadImage=(uriL)=>{
//
//     let formData = new FormData();
//
//
//     let file = {uri:uriL, type:'multipart/form-data',  name:"image[0]", filename:"222222.jpg"};
//
//     formData.append('appid','1251414411');
//     formData.append('card_type',0);
//     formData.append("bucket","ocr");
//
//     formData.append('card_type',0);
//     formData.append('image[0]',file);
//     alert('xxxxxx'+ JSON.stringify(formData));
//
//     fetch('http://service.image.myqcloud.com/ocr/idcard', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'multipart/form-data',
//             'Authorization': 'QxLS9Y6KTvlKSH7rm0UpIzox429hPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg3OTIwNjM1JmU9MTQ4NzkzMDYzNA==',
//             'Host': 'service.image.myqcloud.com',
//             'Content-Length': formData.length,
//         },
//         body: formData
//     })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             // console.log('resault' + JSON.stringify(responseJson));
//             alert('resault' + JSON.stringify(responseJson))
//         })
//         .catch((error) => {
//             // console.log('error' + error);
//             alert('error' + error);
//         })
//
// }





// var bodyDict = {
//     "appid": '1251414411',
//     "bucket": "ocr",
//     "group_ids":[ "tencent" ],
//     "person_id":"person0",
//     "url":"http://ocr-1251414411.costj.myqcloud.com/IMG_0171.JPG",
//     // "url":"http://ocr-1251414411.costj.myqcloud.com/IMG_0171.JPG",
//
// }
// var length =   JSON.stringify(bodyDict).length
// fetch('http://service.image.myqcloud.com/face/newperson', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'MZ4voutyeEDsrYZj4oJoeGC8iQthPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg4MjY5MDMyJmU9MTQ4ODI3OTAzMg==',
//         'Host': 'service.image.myqcloud.com',
//         'Content-Length': length,
//     },
//     body: JSON.stringify(bodyDict)
// })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         console.log('resault' + JSON.stringify(responseJson));
//         alert('resault' + JSON.stringify(responseJson));
//     })
//     .catch((error) => {
//         console.log('error' + error);
//     })
