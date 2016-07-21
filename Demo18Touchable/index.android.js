import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Navigator,
    ScrollView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

var onePt = 1 / PixelRatio.get();

class Main extends Component {

    show(value) {
        alert(value);
    }

    render() {
        return (
            <View style={[styles.flex]}>
                <TouchableHighlight onPress={this.show.bind(this,'aaaaa')}
                                    underlayColor='red'>
                    <Text style={styles.item}>aaaaaa</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.show.bind(this,'aaaaa')}>
                    <Text style={styles.item}>aaaaaa</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={this.show.bind(this,'aaaaa')}>
                    <Text style={styles.item}>aaaaaa</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    item: {
        fontSize: 16,
    },

    flex: {
        flex: 1
    },

});

AppRegistry.registerComponent('AwesomeProject', () =>Main);