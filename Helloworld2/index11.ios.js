/**
 * Created by Jason on 16/8/3.
 */
import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
}from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FirstPage from './scrollableTab/firstPage'
import SeconPage from './scrollableTab/secondPage';


class Helloworld extends Component{
    render(){
        return(
            <View style={[styles.flex,styles.backgroundColor]}>
                <ScrollableTabView

                    renderTabBar={() => <DefaultTabBar style={{backgroundColor:'white'}} />}
                    tabBarUnderlineStyle = {styles.line}
                    tabBarUnderlineColor='#FF0000'
                    style={{marginTop:20,} }>

                    <FirstPage tabLabel='left'></FirstPage>
                    <SeconPage tabLabel='right'></SeconPage>

                </ScrollableTabView>
            </View>
        );
    }
}

class TextField extends Component{
    render(){
        return(
            <TextInput placeholder={this.props.name} style={styles.TF}></TextInput>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    backgroundColor:{
        // backgroundColor:'green',
    },
    TF:{
        height:50,
        marginLeft:30,
        marginRight:30,
        marginTop:100,
        borderWidth:0.5,
        borderColor:'red',

    },
    line:{
        backgroundColor:'green',
    },
})

AppRegistry.registerComponent('Helloworld', ()=> Helloworld)
