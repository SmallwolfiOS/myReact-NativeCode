/**
 * Created by Jason on 2017/2/23.
 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

class Helloworld3 extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    componentDidMount() {
        // let formData = new FormData();
        // let file = {uri: (require('./xuah.png')), type: 'multipart/form-data', name: 'a.png'};


        var bodyDict = {
              "appid": '1251414411',
              "bucket": "ocr",
              "card_type":1,
              "url_list": [
                  "http://ocr-1251414411.costj.myqcloud.com/IMG_01742.JPG",
              ]
          }
          var length =   JSON.stringify(bodyDict).length
        fetch('http://service.image.myqcloud.com/ocr/idcard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'uGuUO59dtbb9z/TURbdbduk9OGBhPTEyNTE0MTQ0MTEmYj1vY3Imaz1BS0lEdjM2NGRkSDhYTnVWbUtLVEJJeEE4SjY2UUc4UXRPWTUmZT0xNDg3OTEzNzM0JnQ9MTQ4NzkwMzczNCZyPTE5NDQ1MTAxNzUmdT0wJmY9',
                // 'Host': 'service.image.myqcloud.com',
                // 'Content-Length': length,


            },
            body: JSON.stringify(bodyDict)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('resault' + JSON.stringify(responseJson));
            alert('resault' + JSON.stringify(responseJson));
        })
        .catch((error) => {
            console.log('error' + error);
        })

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

AppRegistry.registerComponent('Helloworld3', () => Helloworld3);
