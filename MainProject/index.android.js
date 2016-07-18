import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio} from "react-native";
const Header = require('./header')
class Main extends Component {
    render() {
        return (
            <View>
                <Header></Header>
                <List title="dddddd"></List>
                <List title="dddddd"></List>
                <List title="dddddd"></List>
                <List title="dddddd"></List>

                <ImportantNews
                    news={[
                    '11111',
                    '22222',
                    '33333',
                    '44444',
                    ]}>
                </ImportantNews>
            </View>
        );
    }
}

class List extends Component {
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}


class ImportantNews extends Component {
    show(title) {
        alert(title);
    }

    render() {
        var news = [];

        for (i in this.props.news) {
            var text = (
                <Text onPress={this.show.bind(this,this.props.news[i])}
                      style={styles.news_item}
                      numberOfLines={2}
                      key={i}>
                    {this.props.news[i]}
                </Text>
            )
            news.push(text)
        }

        return (
            <View>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16,
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 15,
    },
    news_item: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 30
    },
});

AppRegistry.registerComponent('AwesomeProject', () => Main); 
