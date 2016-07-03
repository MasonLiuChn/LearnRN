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

var MovieDetail = React.createClass({

    render: function () {
        return (
            <View style={styles.container}>
                <Text>detaildddddddddddddddd</Text>
            </View>
        );
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

module.exports = MovieDetail;
