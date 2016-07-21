import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio, Navigator, ScrollView, TextInput} from "react-native";

var onePt = 1 / PixelRatio.get();
/*
 PixelRatio
 static get()

 返回设备的像素密度，例如：

 PixelRatio.get() === 1
 mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5
 hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2
 iPhone 4, 4S
 iPhone 5, 5c, 5s
 iPhone 6
 xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3
 iPhone 6 plus
 xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5
 Nexus 6

 static getPixelSizeForLayoutSize(layoutSize: number)

 将一个布局尺寸(dp)转换为像素尺寸(px)。

 一定会返回一个整数数值。
 */


class Main extends Component {
    render() {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search></Search>
            </View>
        );
    }
}

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            value: null
        }
    }

    hide(val) {
        this.setState({
            show: false,
            value: val
        })
    }

    getValue(text) {
        this.setState({
            show: true,
            value: text
        })
    }

    render() {
        return (
            <View style={styles.flex}>
                {/* 搜索框 和 搜索按钮 */}
                <View style={[styles.flexDirection]}>
                    <View style={[styles.flex,styles.input]}>
                        <TextInput
                            returnKeyType="search"
                            placeholder="请输入关键词"
                            value={this.state.value}
                            onChangeText={this.getValue.bind(this)}
                        />
                    </View>
                    <View style={[styles.btn]}>
                        <Text style={[styles.search]}>搜索</Text>
                    </View>
                </View>

                {this.state.show ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this,this.state.value+'1')}
                              style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}1
                        </Text>

                        <Text onPress={this.hide.bind(this,this.state.value+'2')}
                              style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}2
                        </Text>

                        <Text onPress={this.hide.bind(this,this.state.value+'3')}
                              style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}3
                        </Text>

                    </View>
                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 10,
    },

    result: {
        marginTop: 1,
        marginLeft: 18,
        marginRight: 5,
        height: 200,
    },

    flex: {
        flex: 1
    },
    flexDirection: {
        flexDirection: 'row',
    },
    topStatus: {
        marginTop: 25,
    },
    input: {
        height: 45,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 5,
        borderRadius: 5,
    },
    btn: {
        width: 45,
        height: 45,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('AwesomeProject', () =>Main);