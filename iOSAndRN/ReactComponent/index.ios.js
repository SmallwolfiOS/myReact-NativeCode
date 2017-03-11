'use strict';

import React ,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class iOSAndRN extends Component {
    render() {
        return (
            <View style={styles.container} ></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

});

// Module name
AppRegistry.registerComponent('iOSAndRN', () => iOSAndRN);