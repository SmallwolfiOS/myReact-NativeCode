/**
 * Created by Jason on 16/8/10.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    AsyncStorage,
    TouchableHighlight,
} from 'react-native';

var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
var STORAGE_KEY_MESSAGE = '@AsyncStorageDemo:key_message';

//简单封装一个组件
class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class Helloworld extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            messages:[],
        };
      }
    //组件挂载之后回调方法
    componentDidMount(){
        this._loadInitialState().done();
    }
    //初始化数据-默认从AsyncStorage中获取数据
    async _loadInitialState(){
        try{
            var value=await AsyncStorage.getItem(STORAGE_KEY_ONE);
            if(value!=null){
                this._appendMessage('从存储中获取到数据为:'+value);
            }else{
                this._appendMessage('存储中无数据,初始化为空数据');
            }
        }catch(error){
            this._appendMessage('AsyncStorage错误'+error.message);
        }
    }
    //进行储存数据_ONE
    async _saveValue_One(){
        try{
            await AsyncStorage.setItem(STORAGE_KEY_ONE,'我是老王');
            this._appendMessage('保存到存储的数据为:'+'我是老王');
        }catch(error){
            this._appendMessage('AsyncStorage错误'+error.message);
        }
    }
    //进行存储数据删除_ONE
    async _removeValue_One(){
        try{
            await AsyncStorage.removeItem(STORAGE_KEY_ONE);
            this._appendMessage('数据删除成功...');
        }catch(error){
            this._appendMessage('AsyncStorage错误'+error.message);
        }
    }
    //进行把message信息添加到messages数组中
    _appendMessage(message){
        this.setState({messages:this.state.messages.concat(message)});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    屏幕信息如下:
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕宽度:+{Dimensions.get('window').width};
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕高度:'+{Dimensions.get('window').height};
                </Text>


                <Text style={styles.welcome}>
                    AsyncStorage使用实例
                </Text>
                <CustomButton text='点击存储数据_我是老王' onPress={this._saveValue_One}/>
                <CustomButton text='点击删除数据' onPress={this._removeValue_One}/>
                <Text style={styles.content}>信息为:</Text>
                {this.state.messages.map((m) => <Text style={styles.content} key={m}>{m}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    instructions:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    welcome: {
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
    },
    content:{
        fontSize: 13,
        textAlign: 'left',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
