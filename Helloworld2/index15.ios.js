/**
 * Created by Jason on 2016/12/19.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
var Orientation = require('react-native-orientation');


_orientationDidChange=(orientation) =>{
    if (orientation == 'LANDSCAPE') {
        //do something with landscape layout
    } else {
        //do something with portrait layout
    }
}

class Helloworld extends Component {
    _orientationDidChange=(orientation) =>{
    if (orientation == 'LANDSCAPE') {
        //do something with landscape layout
    } else {
        //do something with portrait layout
    }
}
    componentWillMount =()=> {
    //The getOrientation method is async. It happens sometimes that
    //you need the orientation at the moment the js starts running on device.
    //getInitialOrientation returns directly because its a constant set at the
    //beginning of the js code.
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
        //do stuff
    } else {
        //do other stuff
    }
}
    componentDidMount=()=> {
    Orientation.lockToPortrait(); //this will lock the view to Portrait
    //Orientation.lockToLandscape(); //this will lock the view to Landscape
    //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations

    Orientation.addOrientationListener(this._orientationDidChange);
}

    componentWillUnmount=()=> {
    Orientation.getOrientation((err,orientation)=> {
        console.log("Current Device Orientation: ", orientation);
    });
    Orientation.removeOrientationListener(this._orientationDidChange);
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
        flex: 1,
    },
});

AppRegistry.registerComponent('Helloworld', () => Helloworld);
