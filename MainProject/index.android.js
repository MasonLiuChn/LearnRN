import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio, Navigator, ScrollView} from "react-native";

class Main extends Component {
    render() {
        let defaultName = 'List';
        let defaultComponent = List;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={
                    (route)=>{
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route,navigator)=>{
                        let Component = route.component;
                        //return <Component navigator={navigator}/>
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
            />
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        //const {navigator} = this.props;
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
            })
        }
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item}
                      onPress={this._pressButton.bind(this)}
                >
                    1111111111111111
                </Text>
                <Text style={styles.list_item}
                      onPress={this._pressButton.bind(this)}
                >
                    2222222222222222
                </Text>
                <Text style={styles.list_item}
                      onPress={this._pressButton.bind(this)}
                >
                    33333333333333333
                </Text>
            </ScrollView>
        );
    }
}


class Detail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item}
                      onPress={this._pressButton.bind(this)}>
                    点我返回
                </Text>
            </ScrollView>
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
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
});

AppRegistry.registerComponent('AwesomeProject', () =>Main); 
