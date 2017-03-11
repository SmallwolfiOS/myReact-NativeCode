/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
} from 'react-native';

const Header= require('./header');



class Helloworld extends Component {
    render() {
        let defaultName = 'firstPage';
        let defaultComponent = firstPage;
        return (
            <Navigator
                style={{backgroundColor:'red'}}
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}

            />
         );
    }
}
class firstPage extends Component {

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'secondPage',
                component: secondPage,
                // params: {
                //     id: this.state.id
                // }
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <List title='一线城市楼市退烧,里把最后一个路由踢出去'></List>
                <List title='这个是页面之间跳转时候的动画，具体有哪些？'></List>
                <List title='也就是启动app之后会看到界面的第一屏'></List>
                <List title='需要填写两个参数: name 跟 component'></List>
                <TouchableHighlight style={{backgroundColor:'yellow',height:40 ,width:80,justifyContent:'center',alignItems:'center'}}
                                    onPress={this._pressButton.bind(this)}
                >
                    <Text style={{fontSize:20}}>按钮</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
class secondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <List title='一线城市楼市退烧,里把最后一个路由踢出去'></List>
                <List title='这个是页面之间跳转时候的动画，具体有哪些？'></List>
                <List title='也就是启动app之后会看到界面的第一屏'></List>
                <List title='需要填写两个参数: name 跟 component'></List>
                <TouchableHighlight style={{backgroundColor:'yellow',height:40 ,width:80,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20}}>按钮</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
class List extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fontWeight: 'bold', fontSize: 15,
        };
    }
    customHandle=()=>{
        this.setState({
            fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
        })
    }
    render(){
        return(
            <View style={styles.list_item}>
    <Text style={{fontWeight: this.state.fontWeight, fontSize: this.state.fontSize}} onPress={this.customHandle}>{this.props.title}</Text>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },
    list_item_font:{
        fontSize:16,

    },


});





AppRegistry.registerComponent('Helloworld', () => Helloworld);
