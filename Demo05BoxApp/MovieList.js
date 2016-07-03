'use strict';

var React = require('react-native');
var {
    Image,
    PixelRatio,
    ListView,
    StyleSheet,
    Text,
    View,
    SrollView,
} = React;

var MovieItem = require('./MovieItem');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MovieList = React.createClass({
    getInitialState: function () {
        return {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true
                });
            })
            .done();
    },

    render: function () {
        if (this.state.loaded) {
            return this.renderList();
        } else {
            return this.renderLoading();
        }
    },

    renderList: function () {
        return (
            <ListView style={styles.listView}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderItem}/>
        );
    },

    renderItem: function (Movie) {
        return (
            <MovieItem m={Movie} navigator={this.props.navigator}/>
        );
    },

    renderLoading: function () {
        return (
            <Text>
                Loading!
            </Text>
        );
    },

});

var styles = StyleSheet.create({
    contentContainer: {
        padding: 10,
    },

    listView: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = MovieList;
