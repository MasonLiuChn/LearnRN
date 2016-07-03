'use strict';

var React = require('react-native');
var {
    Image,
    PixelRatio,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View
} = React;

var MovieDetail = require('./MovieDetail');

var MovieItem = React.createClass({

    getInitialState: function () {
        return {Movie: null};
    },

    render: function () {
        return (
            <TouchableHighlight onPress={() => this.pressRow()}>
                <View style={styles.container}>
                    <Image source={{uri: this.props.m.posters.thumbnail}} style={styles.thumbnail}/>
                    <View style={styles.rightContainer}>
                        <Text>{this.props.m.title}</Text>
                        <Text>{this.props.m.year}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    },


    pressRow: function () {
        //ToastAndroid.show('关于', ToastAndroid.LONG);
        this.props.navigator.push({
            name: "MovieDetail",
        });
    },


});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },

    rightContainer: {
        flex: 1,
        alignItems: 'center',
    },

    thumbnail: {
        width: 50,
        height: 100
    },
});

module.exports = MovieItem;
