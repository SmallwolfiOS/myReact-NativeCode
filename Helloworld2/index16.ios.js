/**
 * Created by Jason on 2017/2/7.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    TouchableOpacity,
    Platform,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
const RNFS = require('react-native-fs');
const FileOpener = require('react-native-file-opener');
const SavePath = Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.ExternalDirectoryPath;
const sampleDocFilePath = SavePath + '/sample.docx';

class Helloworld extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            progress:0,
            filepath:null,
        };
      }
    action(){

          this.task =RNFetchBlob
              .config({
            // add this option that makes response data to be stored as a file,
            // this is much more performant.
            fileCache : true,
            path : sampleDocFilePath,
        })
            .fetch('GET', 'http://10.2.8.201:8080/hello/888888888.docx', {
                //some headers ..
            });
        this.task.progress((received, total) => {
                console.log('progress', received / total)
                // alert( received / total);
            // alert(received + 'ssss' + total);
                if (received == total) {
                    this.cancleAction()
                }
                this.setState({
                    progress: Math.floor(received/total*100),
                })
            })
        this.task.then((res) => {
                // the temp file path
            alert('下载完成');
                console.log('The file saved to ', res.path())
            this.setState({
                filepath:res.path(),
            })
            alert(res.path());
            })
    }
    cancleAction(){
        this.task.cancel((err) => {
            if(err){

            }else{
                alert("取消成功");
            }
        })
    }
    openFile(){
        FileOpener.open(
            this.state.filepath,
            'application/msword'
        ).then(() => {
            console.log('success!!');
            alert('成功了');
        },(e) => {
            alert('出现错误');
            console.log('error!!');
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={ styles.startButton}
                                  onPress={this.action.bind(this)}
                >
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton} onPress={()=>this.openFile()}>
                    <Text>
                        打开
                    </Text>
                </TouchableOpacity>
                <Text style={{backgroundColor:'red',height:50, width:300,marginTop:30}}>{this.state.progress}</Text>
                <WebView
                    style={{
                        backgroundColor: 'yellow',
                        height: 600,
                        marginTop:10,
                    }}
                    source={{uri: 'http://10.2.8.201:8080/hello/a.xlsx'}}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    startButton:{
        height:40,
        width:80,
        backgroundColor:'yellow',
        marginTop:100,
        marginLeft: 100,
    },
    openButton:{
        height:40,
        width:80,
        backgroundColor:'red',
        marginTop:10,
        marginLeft: 100,
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
