/**
 * Created by Jason on 16/7/20.
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

} from 'react-native';

class Helloworld extends Component {
    render() {
        let defaultName = 'firstPage';
        let defaultComponent = firstPage;
        return (
            <Navigator
                style={{backgroundColor:'red'}}
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navContainer}
                        routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }
}
class firstPage extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
        };
    }
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

                <TouchableHighlight style={{backgroundColor:'yellow',height:40 ,width:80,justifyContent:'center',alignItems:'center'}}
                                    onPress={this._pressButton.bind(this)}>
                    <Text style={{fontSize:20}}>按钮</Text>
                </TouchableHighlight>
                <ListView
                    style={{backgroundColor:'#fff'}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text onPress={this._pressButton.bind(this)}>{rowData}</Text>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh)}
                            tintColor="red"
                            title="正在刷新。。。"
                            colors={['blue', 'green', 'red']}
                            progressBackgroundColor='yellow'
                        />}
                />
            </View>
        );
    }
}
// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 填出提示框
    onPress() {
        alert("我是Spike!");
    },

    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity

                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.popToTop()}}}>
                        <Text style={styles.leftNavButtonText}>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    应用标题
                </Text>
            </View>
        );
    }
};
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

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:64,
    },
    navContainer:{
        backgroundColor:'blue',
        paddingTop:12,
        paddingBottom:10,
    },
    // 按钮文字
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }

});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
