import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio} from "react-native";

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        alignItems: 'center'
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    font_1: {
        color: '#CD1D1C',
    },
    font_2: {
        color: '#fff',
        backgroundColor: '#CD1D1C'
    },
});

module.exports = Header;