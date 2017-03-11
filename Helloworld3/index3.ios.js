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
            avatarSource:null,
        };
    }
    buttonClick = ()=>{
        var options = {
            title: '选择图片',

            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                // if (Platform.OS === 'ios') {
                //     source.uri = response.uri.replace('file://', '');
                // } else {
                //     source.uri = response.uri
                // }
                // alert('图片'+ response.uri);
                this.setState({
                    avatarSource: source.uri
                });
                this.uploadImage(source.uri);

            }
        });
    }

    uploadImage=(uriL)=>{

        let formData = new FormData();


        let file = {uri:uriL, type:'multipart/form-data',  name:"image[0]", filename:"222222.jpg"};

        formData.append('appid',1251414411);
        // formData.append("bucket","ocr");
        formData.append('bucket','ocr');
        formData.append('card_type',0);
        formData.append('image[0]',file);
        // alert('xxxxxx'+ JSON.stringify(formData));

        fetch('http://182.140.177.151/ocr/idcard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data; boundary=' + 'xxxxxxxxxxxxxxx',
                'Authorization': 'QxLS9Y6KTvlKSH7rm0UpIzox429hPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg3OTIwNjM1JmU9MTQ4NzkzMDYzNA==',
                'Host': 'service.image.myqcloud.com',
                'Content-Length': formData.length,
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('resault' + JSON.stringify(responseJson));
                alert('resault' + JSON.stringify(responseJson))
            })
            .catch((error) => {
                // console.log('error' + error);
                alert('error' + error);
            })

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonClick.bind(this)}>
                    <Text>点击获取图片</Text>
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
        width:80,
        marginTop:100,
        marginLeft:100,
        backgroundColor:'red',
    }
});

AppRegistry.registerComponent('Helloworld3', () => Helloworld3);






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  * @flow
// //  */
// //
// // import React, { Component } from 'react';
// // import {
// //   AppRegistry,
// //   StyleSheet,
// //   Text,
// //   View,
// //     TouchableOpacity,
// //     Platform,
// //     WebView,
// // } from 'react-native';
// // var Dimensions = require('Dimensions');
// // var ScreenWidth = Dimensions.get('window').width;
// // var ScreenHeight = Dimensions.get('window').height;
// // import RNFetchBlob from 'react-native-fetch-blob'
// // class Helloworld3 extends Component {
// //     // 构造
// //     constructor(props) {
// //         super(props);
// //         // 初始状态
// //         this.state = {
// //             progress:0,
// //             filepath:'xxx',
// //             mymargin:-200,
// //         };
// //     }
// //     action(){
// //         let dirs = RNFetchBlob.fs.dirs
// //         this.task =RNFetchBlob
// //             .config({
// //                 // add this option that makes response data to be stored as a file,
// //                 // this is much more performant.
// //                 fileCache : true,
// //                 // path : sampleDocFilePath,
// //                 path : dirs.DocumentDir + '/3333.docx',
// //             })
// //             .fetch('GET', 'http://10.2.8.201:8080/hello/888888888.docx', {
// //                 //some headers ..
// //             });
// //         this.task.progress((received, total) => {
// //             console.log('progress', received / total)
// //             // alert( received / total);
// //             // alert(received + 'ssss' + total);
// //             if (received == total) {
// //                 this.cancleAction()
// //             }
// //             this.setState({
// //                 progress: Math.floor(received/total*100),
// //             })
// //         })
// //         this.task.then((res) => {
// //             // the temp file path
// //             alert('下载完成');
// //             console.log('The file saved to ', res.path())
// //             this.setState({
// //                 filepath:res.path(),
// //                 progress:1,
// //             })
// //             alert(res.path());
// //         })
// //             .catch((err) => {
// //                 // error handling ..
// //                 alert(err);
// //             })
// //     }
// //     openFile(){
// //         if(Platform.OS == 'ios'){
// //
// //             RNFetchBlob.ios.previewDocument(this.state.filePath);
// //             return;
// //         }else{
// //             RNFetchBlob.android.actionViewIntent(this.state.filePath, 'application/msword')
// //         }
// //
// //     }
// //     cancleAction(){
// //         this.task.cancel((err) => {
// //             if(err){
// //
// //             }else{
// //                 alert("取消成功");
// //             }
// //         })
// //     }
// //     showPro(){
// //         if (this.state.progress == 1){
// //             return(
// //                 <TouchableOpacity style={styles.openButton} onPress={()=>this.openFile()}>
// //                     <Text>
// //                         打开
// //                     </Text>
// //                 </TouchableOpacity>
// //
// //             );
// //         }else {
// //             return(
// //                 <View>
// //
// //                  <Text style={styles.progressLabel}>{this.state.progress}</Text>
// //                 <View style={[styles.progressView,{width:ScreenWidth * this.state.progress }]}></View>
// //
// //                 </View>
// //             );
// //         }
// //     }
// //   render() {
// //     return (
// //         <View style={styles.container}>
// //           <TouchableOpacity style={ styles.startButton}
// //                             onPress={this.action.bind(this)}
// //           >
// //           </TouchableOpacity>
// //             {this.showPro()}
// //             <WebView style={styles.webView} source={{uri: this.state.filepath == null?'http://www.baidu.com':this.state.filepath}}></WebView>
// //
// //       </View>
// //     );
// //   }
// // }
// //
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         flexDirection:'column',
// //     },
// //     startButton:{
// //         height:40,
// //         width:80,
// //         backgroundColor:'yellow',
// //         marginTop:100,
// //         marginLeft: 100,
// //     },
// //     openButton:{
// //         height:40,
// //         width:80,
// //         backgroundColor:'red',
// //         marginTop:10,
// //         marginLeft: 100,
// //     },
// //     progressLabel:{
// //         backgroundColor:'red',
// //         // height:50,
// //         width:ScreenWidth,
// //         marginTop:30,
// //         textAlign:'center',
// //     },
// //     progressView:{
// //         backgroundColor:'green',
// //         height:20,
// //         marginTop : -20,
// //         marginLeft:0,
// //
// //     },
// //     webView:{
// //         height:300,
// //         width:ScreenWidth,
// //         backgroundColor:'yellow',
// //     },
// // });
// //
// // AppRegistry.registerComponent('Helloworld3', () => Helloworld3);
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
//
//     componentDidMount() {
//         // let formData = new FormData();
//         // let file = {uri: (require('./xuah.png')), type: 'multipart/form-data', name: 'a.png'};
//
//
//         var bodyDict = {
//             "appid": '1251414411',
//             "bucket": "ocr",
//             "card_type":0,
//             "url_list": [
//                 "http://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/pc/ci-identify/css/img/demo/mp-demo3.jpg?nowebp",
//             ]
//         }
//         var length =   JSON.stringify(bodyDict).length
//         fetch('http://service.image.myqcloud.com/ocr/namecard', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'mUW34jtgzZ6P/ZlKWAA3O1Gryj1hPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmZT0xNDg4MTcyNTE3JnQ9MTQ4ODE2MjUxNyZyPTU1OTYwMDg4MyZ1PTAmZj0=',
//                 // 'Host': 'service.image.myqcloud.com',
//                 // 'Content-Length': length,
//             },
//             body: JSON.stringify(bodyDict)
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log('resault' + JSON.stringify(responseJson));
//                 alert('resault' + JSON.stringify(responseJson));
//             })
//             .catch((error) => {
//                 console.log('error' + error);
//             })
//
//     }
//     buttonClick = ()=>{
//         // var options = {
//         //     title: '选择图片',
//         //
//         //     storageOptions: {
//         //         skipBackup: true,
//         //         path: 'images'
//         //     }
//         // };
//         // ImagePicker.showImagePicker(options, (response) => {
//         //     // console.log('Response = ', response);
//         //
//         //     if (response.didCancel) {
//         //         console.log('User cancelled image picker');
//         //     }
//         //     else if (response.error) {
//         //         // console.log('ImagePicker Error: ', response.error);
//         //     }
//         //     else if (response.customButton) {
//         //         console.log('User tapped custom button: ', response.customButton);
//         //     }
//         //     else {
//         //         let source = { uri: response.uri };
//         //
//         //         // You can also display the image using data:
//         //         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//         //
//         //         // if (Platform.OS === 'ios') {
//         //         //     source.uri = response.uri.replace('file://', '');
//         //         // } else {
//         //         //     source.uri = response.uri
//         //         // }
//         //         // alert('图片'+ response.uri);
//         //         this.setState({
//         //             avatarSource: source.uri
//         //         });
//         //         this.uploadImage(source.uri);
//         //
//         //     }
//         // });
//     }
//
//     uploadImage=(uriL)=>{
//
//         let formData = new FormData();
//
//
//         let file = {uri:uriL, type:'multipart/form-data',  name:"image[0]", filename:"222222.jpg"};
//
//         formData.append('appid','1251414411');
//         formData.append('card_type',0);
//         formData.append("bucket","ocr");
//
//         formData.append('card_type',0);
//         formData.append('image[0]',file);
//         alert('xxxxxx'+ JSON.stringify(formData));
//
//         fetch('http://service.image.myqcloud.com/ocr/idcard', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': 'QxLS9Y6KTvlKSH7rm0UpIzox429hPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg3OTIwNjM1JmU9MTQ4NzkzMDYzNA==',
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
//         backgroundColor:'blue',
//     }
// });
//
// AppRegistry.registerComponent('Helloworld3', () => Helloworld3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Created by Jason on 2017/2/23.
 */
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
//         formData.append("bucket",'ocr');
//         formData.append('card_type',0);
//         formData.append('image[0]',file);
//
//         // alert('xxxxxx'+ JSON.stringify(formData));
//
//         fetch('http://service.image.myqcloud.com/ocr/namecard', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': 'QxLS9Y6KTvlKSH7rm0UpIzox429hPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmdD0xNDg3OTIwNjM1JmU9MTQ4NzkzMDYzNA==',
//                 'Host': 'service.image.myqcloud.com',
//                 'Content-Length': formData.length,
//             },
//             body: JSON.stringify(formData)
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
